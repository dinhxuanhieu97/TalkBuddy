// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add support for importing .svg files
config.resolver.assetExts.push("svg");

// Add support for importing .mp3, .wav files for audio
config.resolver.assetExts.push("mp3", "wav", "aac", "ogg");

// Polyfill localStorage for Node.js environment (fixes expo-notifications error)
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "./localStorageShim": require.resolve("./src/localStorageShim"),
};

module.exports = config;
