import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  ActivityIndicator,
  Animated,
  Pressable,
  LayoutAnimation,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useUserStore } from "../stores/userStore";
import { useT } from "../lib/i18n";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  language: string;
}

export function EditProfile() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const t = useT();

  const [formData, setFormData] = useState<FormData>({
    name: user?.name || "Traveler",
    email: user?.email || "traveler@talkbuddy.app",
    phone: user?.phone || "",
    bio: user?.bio || "",
    location: user?.location || "",
    language: user?.language || "English",
  });

  const [avatar, setAvatar] = useState<string | null>(user?.avatar || null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Validation
  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = t("errors.nameRequired");
        } else if (value.length < 2) {
          newErrors.name = t("errors.nameMinLength");
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = t("errors.emailRequired");
        } else if (!emailRegex.test(value)) {
          newErrors.email = t("errors.emailInvalid");
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (value && !/^\+?[\d\s-()]+$/.test(value)) {
          newErrors.phone = t("errors.phoneInvalid");
        } else {
          delete newErrors.phone;
        }
        break;

      case "bio":
        if (value.length > 200) {
          newErrors.bio = t("errors.bioMaxLength");
        } else {
          delete newErrors.bio;
        }
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    validateField(field, value);
  };

  // Image Picker
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        t("errors.permissionDenied"),
        t("errors.permissionMessageCameraRoll"),
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setAvatar(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        t("errors.permissionDenied"),
        t("errors.permissionMessageCamera"),
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets[0]) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleAvatarPress = () => {
    Alert.alert(t("editProfile.changeAvatar"), t("editProfile.chooseOption"), [
      { text: t("editProfile.takePhoto"), onPress: takePhoto },
      { text: t("editProfile.chooseFromLibrary"), onPress: pickImage },
      { text: t("editProfile.cancel"), style: "cancel" },
    ]);
  };

  // Save Profile
  const handleSave = async () => {
    // Validate all fields
    Object.keys(formData).forEach((key) => {
      validateField(key as keyof FormData, formData[key as keyof FormData]);
    });

    if (Object.keys(errors).length > 0) {
      Alert.alert(t("errors.validationError"), t("errors.fixErrors"));
      return;
    }

    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      // Update Zustand store
      setUser({
        id: user?.id || "1",
        ...formData,
        avatar: avatar || undefined,
      });

      setIsSaving(false);
      Alert.alert(t("editProfile.success"), t("editProfile.profileUpdated"));
    }, 1500);
  };

  const handleCancel = () => {
    Alert.alert(
      t("editProfile.discardChanges"),
      t("editProfile.confirmDiscard"),
      [
        { text: t("editProfile.keepEditing"), style: "cancel" },
        {
          text: t("editProfile.discard"),
          style: "destructive",
          onPress: () => {
            // Reset to original values
            setFormData({
              name: user?.name || "Traveler",
              email: user?.email || "traveler@talkbuddy.app",
              phone: user?.phone || "",
              bio: user?.bio || "",
              location: user?.location || "",
              language: user?.language || "English",
            });
            setAvatar(user?.avatar || null);
            setErrors({});
          },
        },
      ],
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{t("editProfile.title")}</Text>
          <Text style={styles.headerSubtitle}>{t("editProfile.subtitle")}</Text>
        </View>

        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <TouchableOpacity
            style={styles.avatarContainer}
            onPress={handleAvatarPress}
          >
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={60} color="#9E9E9E" />
              </View>
            )}
            <View style={styles.avatarEditBadge}>
              <Ionicons name="camera" size={16} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <Text style={styles.avatarHint}>{t("editProfile.tapToChange")}</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.formSection}>
          {/* Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t("editProfile.fullName")}</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedField === "name" && styles.inputWrapperFocused,
                errors.name && styles.inputWrapperError,
              ]}
            >
              <Ionicons
                name="person-outline"
                size={20}
                color={focusedField === "name" ? "#FFD600" : "#9E9E9E"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(value) => handleInputChange("name", value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder={t("editProfile.namePlaceholder")}
                placeholderTextColor="#9E9E9E"
              />
              {!errors.name && formData.name && (
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              )}
            </View>
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t("editProfile.email")}</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedField === "email" && styles.inputWrapperFocused,
                errors.email && styles.inputWrapperError,
              ]}
            >
              <Ionicons
                name="mail-outline"
                size={20}
                color={focusedField === "email" ? "#FFD600" : "#9E9E9E"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(value) => handleInputChange("email", value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder={t("editProfile.emailPlaceholder")}
                placeholderTextColor="#9E9E9E"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {!errors.email && formData.email && (
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              )}
            </View>
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {/* Phone */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t("editProfile.phone")}</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedField === "phone" && styles.inputWrapperFocused,
                errors.phone && styles.inputWrapperError,
              ]}
            >
              <Ionicons
                name="call-outline"
                size={20}
                color={focusedField === "phone" ? "#FFD600" : "#9E9E9E"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={formData.phone}
                onChangeText={(value) => handleInputChange("phone", value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                placeholder={t("editProfile.phonePlaceholder")}
                placeholderTextColor="#9E9E9E"
                keyboardType="phone-pad"
              />
            </View>
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </View>

          {/* Location */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t("editProfile.location")}</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedField === "location" && styles.inputWrapperFocused,
              ]}
            >
              <Ionicons
                name="location-outline"
                size={20}
                color={focusedField === "location" ? "#FFD600" : "#9E9E9E"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={formData.location}
                onChangeText={(value) => handleInputChange("location", value)}
                onFocus={() => setFocusedField("location")}
                onBlur={() => setFocusedField(null)}
                placeholder={t("editProfile.locationPlaceholder")}
                placeholderTextColor="#9E9E9E"
              />
            </View>
          </View>

          {/* Language */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t("editProfile.language")}</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedField === "language" && styles.inputWrapperFocused,
              ]}
            >
              <Ionicons
                name="language-outline"
                size={20}
                color={focusedField === "language" ? "#FFD600" : "#9E9E9E"}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.input}
                value={formData.language}
                onChangeText={(value) => handleInputChange("language", value)}
                onFocus={() => setFocusedField("language")}
                onBlur={() => setFocusedField(null)}
                placeholder={t("editProfile.languagePlaceholder")}
                placeholderTextColor="#9E9E9E"
              />
            </View>
          </View>

          {/* Bio */}
          <View style={styles.inputGroup}>
            <View style={styles.bioLabelRow}>
              <Text style={styles.inputLabel}>{t("editProfile.bio")}</Text>
              <Text style={styles.charCount}>{formData.bio.length}/200</Text>
            </View>
            <View
              style={[
                styles.inputWrapper,
                styles.textAreaWrapper,
                focusedField === "bio" && styles.inputWrapperFocused,
                errors.bio && styles.inputWrapperError,
              ]}
            >
              <TextInput
                style={[styles.input, styles.textArea]}
                value={formData.bio}
                onChangeText={(value) => handleInputChange("bio", value)}
                onFocus={() => setFocusedField("bio")}
                onBlur={() => setFocusedField(null)}
                placeholder={t("editProfile.bioPlaceholder")}
                placeholderTextColor="#9E9E9E"
                multiline
                numberOfLines={4}
                maxLength={200}
              />
            </View>
            {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancel}
          disabled={isSaving}
        >
          <Text style={styles.cancelButtonText}>{t("editProfile.cancel")}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.saveButton, isSaving && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <ActivityIndicator color="#1C1C1E" />
          ) : (
            <>
              <Ionicons name="checkmark" size={20} color="#1C1C1E" />
              <Text style={styles.saveButtonText}>
                {t("editProfile.saveChanges")}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 24,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9E9E9E",
  },
  avatarSection: {
    alignItems: "center",
    paddingVertical: 32,
    backgroundColor: "#FFFFFF",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "#FFD600",
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#E0E0E0",
  },
  avatarEditBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFD600",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  avatarHint: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  formSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  inputGroup: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    paddingHorizontal: 16,
    minHeight: 52,
  },
  inputWrapperFocused: {
    borderColor: "#FFD600",
  },
  inputWrapperError: {
    borderColor: "#FF3B30",
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1C1C1E",
    paddingVertical: 12,
  },
  textAreaWrapper: {
    alignItems: "flex-start",
    minHeight: 120,
  },
  textArea: {
    textAlignVertical: "top",
    paddingTop: 12,
  },
  bioLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  charCount: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  errorText: {
    fontSize: 12,
    color: "#FF3B30",
    marginTop: 4,
    marginLeft: 4,
  },
  actionButtons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#666",
  },
  saveButton: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#FFD600",
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1C1C1E",
  },
});
