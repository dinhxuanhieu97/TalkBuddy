const { withAppBuildGradle, createRunOncePlugin } = require('@expo/config-plugins');

const PLUGIN_NAME = 'with-android-release-signing';
const PLUGIN_VERSION = '1.0.0';

const MARKER_START =
  '// @generated begin talkbuddy-android-release-signing - expo prebuild (DO NOT MODIFY)';
const MARKER_END =
  '// @generated end talkbuddy-android-release-signing';

function removeManagedBlock(contents) {
  const escapedStart = MARKER_START.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const escapedEnd = MARKER_END.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const managedBlockRegex = new RegExp(`${escapedStart}[\\s\\S]*?${escapedEnd}\\n?`, 'g');
  return contents.replace(managedBlockRegex, '');
}

function injectManagedBlock(contents) {
  const managedBlock = `${MARKER_START}
def _tbSigningRequiredProps = [
        'MYAPP_UPLOAD_STORE_FILE',
        'MYAPP_UPLOAD_KEY_ALIAS',
        'MYAPP_UPLOAD_STORE_PASSWORD',
        'MYAPP_UPLOAD_KEY_PASSWORD'
]
def _tbProjectKeystorePropertiesFile = new File(projectRoot, 'keystore.properties')
def _tbProjectKeystoreProperties = new Properties()
if (_tbProjectKeystorePropertiesFile.exists()) {
    _tbProjectKeystorePropertiesFile.withInputStream { stream ->
        _tbProjectKeystoreProperties.load(stream)
    }
}
def _tbRequestedTasks = gradle.startParameter.taskNames.collect { it.toLowerCase() }
def _tbIsReleaseTask = _tbRequestedTasks.any { it.contains('release') }
def _tbGetSigningProp = { key ->
    findProperty(key)
            ?: _tbProjectKeystoreProperties.getProperty(key)
            ?: System.getenv(key)
}
${MARKER_END}
`;

  if (contents.includes(MARKER_START)) {
    return contents;
  }

  if (!/^\s*android\s*\{/m.test(contents)) {
    throw new Error('Unable to find android block while injecting signing helpers.');
  }

  return contents.replace(/^\s*android\s*\{/m, `${managedBlock}\nandroid {`);
}

function patchSigningConfigs(contents) {
  const signingConfigsRegex = /signingConfigs\s*\{[\s\S]*?\n\s*\}\n\s*buildTypes\s*\{/m;

  if (!signingConfigsRegex.test(contents)) {
    throw new Error('Unable to find signingConfigs block in android/app/build.gradle.');
  }

  const replacement = `signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
        release {
            def _tbMissingSigningProps = _tbSigningRequiredProps.findAll { !_tbGetSigningProp(it) }
            if (_tbIsReleaseTask && !_tbMissingSigningProps.isEmpty()) {
                throw new GradleException("Missing Android release signing properties: \${_tbMissingSigningProps.join(', ')}. Define them in keystore.properties, ~/.gradle/gradle.properties, or environment variables.")
            }

            def _tbUploadStoreFile = _tbGetSigningProp('MYAPP_UPLOAD_STORE_FILE')
            if (_tbUploadStoreFile) {
                storeFile file(_tbUploadStoreFile)
                storePassword _tbGetSigningProp('MYAPP_UPLOAD_STORE_PASSWORD')
                keyAlias _tbGetSigningProp('MYAPP_UPLOAD_KEY_ALIAS')
                keyPassword _tbGetSigningProp('MYAPP_UPLOAD_KEY_PASSWORD')
            }
        }
    }
    buildTypes {`;

  return contents.replace(signingConfigsRegex, replacement);
}

function patchReleaseBuildType(contents) {
  const releaseSigningRegex =
    /(release\s*\{[\s\S]*?)signingConfig\s+signingConfigs\.[a-zA-Z0-9_]+/m;

  if (!releaseSigningRegex.test(contents)) {
    throw new Error('Unable to find release signingConfig in android/app/build.gradle.');
  }

  return contents.replace(releaseSigningRegex, '$1signingConfig signingConfigs.release');
}

function patchAppBuildGradle(contents) {
  let next = removeManagedBlock(contents);
  next = injectManagedBlock(next);
  next = patchSigningConfigs(next);
  next = patchReleaseBuildType(next);
  return next;
}

const withAndroidReleaseSigning = (config) =>
  withAppBuildGradle(config, (configWithBuildGradle) => {
    configWithBuildGradle.modResults.contents = patchAppBuildGradle(
      configWithBuildGradle.modResults.contents
    );
    return configWithBuildGradle;
  });

const plugin = createRunOncePlugin(
  withAndroidReleaseSigning,
  PLUGIN_NAME,
  PLUGIN_VERSION
);
plugin.patchAppBuildGradle = patchAppBuildGradle;

module.exports = plugin;
