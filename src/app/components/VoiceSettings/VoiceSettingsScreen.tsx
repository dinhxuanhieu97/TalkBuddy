/**
 * Voice Settings Screen
 *
 * React Native mobile app screen for configuring voice preferences
 * Phase 1: Voice Settings Core implementation
 */

import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  StatusBar,
  Modal,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import {
  useVoiceSettings,
  SPEED_OPTIONS,
} from "../../../hooks/useVoiceSettings";
import {
  SupportedLocale,
  VoiceAccent,
  VoiceGender,
  VoiceSpeed,
} from "../../../types/voice";
import { useT } from "../../../lib/i18n";

interface VoiceSettingsScreenProps {
  locale?: SupportedLocale;
  onBack?: () => void;
  onSave?: () => void;
}

const { height } = Dimensions.get("window");

// Custom Select Option Type
interface SelectOption<T> {
  label: string;
  value: T;
}

// Custom Select Modal Component
interface SelectModalProps<T> {
  visible: boolean;
  title: string;
  options: SelectOption<T>[];
  selectedValue: T;
  onSelect: (value: T) => void;
  onClose: () => void;
  displayValue?: (value: T) => string;
}

function SelectModal<T extends string | number>({
  visible,
  title,
  options,
  selectedValue,
  onSelect,
  onClose,
  displayValue,
}: SelectModalProps<T>) {
  const renderItem = useCallback(
    ({ item }: { item: SelectOption<T> }) => {
      const isSelected = item.value === selectedValue;
      const displayText = displayValue ? displayValue(item.value) : item.label;

      return (
        <TouchableOpacity
          style={[styles.modalItem, isSelected && styles.modalItemSelected]}
          onPress={() => {
            onSelect(item.value);
            onClose();
          }}
        >
          <Text
            style={[
              styles.modalItemText,
              isSelected && styles.modalItemTextSelected,
            ]}
          >
            {displayText}
          </Text>
          {isSelected && <FontAwesome name="check" size={18} color="#007AFF" />}
        </TouchableOpacity>
      );
    },
    [selectedValue, displayValue, onSelect, onClose],
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.value)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
}

export const VoiceSettingsScreen: React.FC<VoiceSettingsScreenProps> = ({
  locale = "en-US",
  onBack,
  onSave,
}) => {
  const t = useT();
  const {
    settings,
    setAccent,
    setSpeed,
    setGender,
    resetToDefaults,
    getCurrentVoiceId,
  } = useVoiceSettings(locale);

  // Modal states
  const [accentModalVisible, setAccentModalVisible] = useState(false);
  const [genderModalVisible, setGenderModalVisible] = useState(false);
  const [speedModalVisible, setSpeedModalVisible] = useState(false);

  // Handle reset
  const handleReset = () => {
    Alert.alert(
      t("voiceSettings.resetTitle"),
      t("voiceSettings.resetMessage"),
      [
        { text: t("common.cancel"), style: "cancel" },
        {
          text: t("voiceSettings.resetConfirm"),
          style: "destructive",
          onPress: () => resetToDefaults(),
        },
      ],
    );
  };

  // Get accent label
  const getAccentLabel = useCallback(
    (accent: VoiceAccent): string => {
      const labels: Record<VoiceAccent, string> = {
        US: t("voiceSettings.accent.us"),
        UK: t("voiceSettings.accent.gb"),
        AU: t("voiceSettings.accent.au"),
      };
      return labels[accent];
    },
    [t],
  );

  // Get gender label
  const getGenderLabel = useCallback(
    (gender: VoiceGender): string => {
      const labels: Record<VoiceGender, string> = {
        Female: t("voiceSettings.gender.female"),
        Male: t("voiceSettings.gender.male"),
      };
      return labels[gender];
    },
    [t],
  );

  // Check if locale supports accent selection (English only)
  const supportsAccent = locale.startsWith("en");

  // Select options
  const accentOptions: SelectOption<VoiceAccent>[] = [
    { label: t("voiceSettings.accent.us"), value: "US" },
    { label: t("voiceSettings.accent.gb"), value: "UK" },
    { label: t("voiceSettings.accent.au"), value: "AU" },
  ];

  const genderOptions: SelectOption<VoiceGender>[] = [
    { label: t("voiceSettings.gender.female"), value: "Female" },
    { label: t("voiceSettings.gender.male"), value: "Male" },
  ];

  const speedOptions: SelectOption<VoiceSpeed>[] = SPEED_OPTIONS.map((opt) => ({
    label: `${opt.label === "Slow" ? t("voiceSettings.speed.slowLabel") : opt.label === "Normal" ? t("voiceSettings.speed.normalLabel") : t("voiceSettings.speed.naturalLabel")} (${opt.value}x)`,
    value: opt.value,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <FontAwesome name="chevron-left" size={24} color="#007AFF" />
          </TouchableOpacity>
        )}
        <Text style={styles.headerTitle}>{t("voiceSettings.title")}</Text>
        {onSave ? (
          <TouchableOpacity onPress={onSave} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Accent Info */}
        <View style={styles.previewSection}>
          <View style={styles.iconContainer}>
            <FontAwesome name="info-circle" size={40} color="#007AFF" />
          </View>
          <Text style={styles.previewText}>
            {t("voiceSettings.accentInfo")}
          </Text>
        </View>

        {/* Settings Section */}
        <View style={styles.settingsSection}>
          {/* Accent Selection (English only) */}
          {supportsAccent && (
            <>
              <Text style={styles.sectionLabel}>
                {t("voiceSettings.accent")}
              </Text>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => setAccentModalVisible(true)}
              >
                <Text style={styles.selectValue}>
                  {getAccentLabel(settings.accent)}
                </Text>
                <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
              </TouchableOpacity>

              <SelectModal
                visible={accentModalVisible}
                title={t("voiceSettings.selectAccent")}
                options={accentOptions}
                selectedValue={settings.accent}
                onSelect={(value) => setAccent(value as VoiceAccent)}
                onClose={() => setAccentModalVisible(false)}
                displayValue={(val) => getAccentLabel(val as VoiceAccent)}
              />
            </>
          )}

          {/* Gender Selection - disabled, using accent-based audio files */}
          {/* 
          <Text style={styles.sectionLabel}>{t("voiceSettings.gender")}</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setGenderModalVisible(true)}
          >
            <Text style={styles.selectValue}>
              {getGenderLabel(settings.gender)}
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
          </TouchableOpacity>

          <SelectModal
            visible={genderModalVisible}
            title={t("voiceSettings.selectGender")}
            options={genderOptions}
            selectedValue={settings.gender}
            onSelect={(value) => setGender(value as VoiceGender)}
            onClose={() => setGenderModalVisible(false)}
            displayValue={(val) => getGenderLabel(val as VoiceGender)}
          />
          */}

          {/* Speed Selection */}
          <Text style={styles.sectionLabel}>{t("voiceSettings.speed")}</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setSpeedModalVisible(true)}
          >
            <Text style={styles.selectValue}>
              {SPEED_OPTIONS.find((s) => s.value === settings.speed)?.label} (
              {settings.speed}x)
            </Text>
            <FontAwesome name="chevron-right" size={16} color="#C7C7CC" />
          </TouchableOpacity>

          <SelectModal
            visible={speedModalVisible}
            title={t("voiceSettings.selectSpeed")}
            options={speedOptions}
            selectedValue={settings.speed}
            onSelect={(value) => setSpeed(value as VoiceSpeed)}
            onClose={() => setSpeedModalVisible(false)}
          />

          {/* Speed Indicator */}
          <View style={styles.speedIndicatorContainer}>
            <View style={styles.speedLabels}>
              <Text style={styles.speedLabel}>
                {t("voiceSettings.speedIndicator.slow")}
              </Text>
              <Text style={styles.speedLabel}>
                {t("voiceSettings.speedIndicator.normal")}
              </Text>
              <Text style={styles.speedLabel}>
                {t("voiceSettings.speedIndicator.natural")}
              </Text>
            </View>
            <View style={styles.speedDots}>
              {SPEED_OPTIONS.map((opt) => (
                <View
                  key={opt.value}
                  style={[
                    styles.speedDot,
                    opt.value === settings.speed && styles.speedDotActive,
                  ]}
                />
              ))}
            </View>
          </View>
        </View>

        {/* Current Voice Info */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>
              {t("voiceSettings.currentVoice")}:{" "}
            </Text>
            {getCurrentVoiceId()}
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.infoLabel}>
              {t("voiceSettings.speedInfo")}:{" "}
            </Text>
            {settings.speedLabel} ({settings.speed}x)
          </Text>
        </View>

        {/* Reset Button */}
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
          activeOpacity={0.8}
        >
          <FontAwesome name="refresh" size={18} color="#8E8E93" />
          <Text style={styles.resetButtonText}>
            {t("voiceSettings.resetToDefaults")}
          </Text>
        </TouchableOpacity>

        {/* Coming Soon Section - disabled */}
        {/* 
        <View style={styles.comingSoonBox}>
          <FontAwesome
            name="microphone"
            size={24}
            color="#007AFF"
            style={styles.comingSoonIcon}
          />
          <Text style={styles.comingSoonTitle}>
            {t("voiceSettings.voiceCloningTitle")}
          </Text>
          <Text style={styles.comingSoonText}>
            {t("voiceSettings.voiceCloningDesc")}
          </Text>
        </View>
        */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C6C6C8",
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  placeholder: {
    width: 40,
  },
  saveButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#007AFF",
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  previewSection: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  previewText: {
    fontSize: 15,
    color: "#3C3C43",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
    paddingHorizontal: 8,
  },
  previewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 10,
    minWidth: 200,
  },
  playButton: {
    backgroundColor: "#007AFF",
  },
  stopButton: {
    backgroundColor: "#FFE5E5",
    borderWidth: 1,
    borderColor: "#FF3B30",
  },
  buttonIcon: {
    marginRight: 10,
  },
  previewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  stopButtonText: {
    color: "#FF3B30",
  },
  settingsSection: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8E8E93",
    marginBottom: 8,
    marginTop: 16,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  selectButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C6C6C8",
  },
  selectValue: {
    fontSize: 17,
    color: "#000",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: height * 0.7,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C6C6C8",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C6C6C8",
  },
  modalItemSelected: {
    backgroundColor: "#F2F2F7",
  },
  modalItemText: {
    fontSize: 17,
    color: "#000",
  },
  modalItemTextSelected: {
    color: "#007AFF",
    fontWeight: "500",
  },
  speedIndicatorContainer: {
    marginTop: 20,
    paddingHorizontal: 4,
  },
  speedLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  speedLabel: {
    fontSize: 13,
    color: "#8E8E93",
  },
  speedDots: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  speedDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#E5E5EA",
  },
  speedDotActive: {
    backgroundColor: "#007AFF",
    transform: [{ scale: 1.3 }],
  },
  infoBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 15,
    color: "#3C3C43",
    marginBottom: 6,
  },
  infoLabel: {
    fontWeight: "600",
    color: "#000",
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  resetButtonText: {
    fontSize: 17,
    color: "#8E8E93",
    marginLeft: 10,
  },
  comingSoonBox: {
    backgroundColor: "#E5F2FF",
    borderRadius: 12,
    padding: 24,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  comingSoonIcon: {
    marginBottom: 12,
  },
  comingSoonTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 6,
  },
  comingSoonText: {
    fontSize: 14,
    color: "#3C3C43",
    textAlign: "center",
    lineHeight: 20,
  },
  errorBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE5E5",
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  errorText: {
    fontSize: 14,
    color: "#FF3B30",
    marginLeft: 10,
    flex: 1,
  },
});

export default VoiceSettingsScreen;
