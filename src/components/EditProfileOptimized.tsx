import { useState, useRef, useEffect } from "react";
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
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
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

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  language: string;
}

export function EditProfileOptimized() {
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

  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Refs
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRefs = useRef<{ [key: string]: TextInput | null }>({});
  const scrollY = useRef(new Animated.Value(0)).current;

  // Sticky header animation
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: "clamp",
  });

  const avatarSize = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [110, 40],
    extrapolate: "clamp",
  });

  const avatarBorderWidth = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [4, 2],
    extrapolate: "clamp",
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });

  const miniTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  // Dismiss keyboard when tap outside
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Auto-scroll to focused input
  const scrollToInput = (inputKey: string) => {
    const input = inputRefs.current[inputKey];
    if (input && scrollViewRef.current) {
      setTimeout(() => {
        input.measureLayout(
          scrollViewRef.current as any,
          (x, y, width, height) => {
            scrollViewRef.current?.scrollTo({
              y: y - 100,
              animated: true,
            });
          },
          () => {},
        );
      }, 100);
    }
  };

  // Validation
  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = t("errors.nameRequired");
        } else if (value.length < 2) {
          newErrors.name = t("errors.min2Characters");
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = t("errors.emailRequired");
        } else if (!emailRegex.test(value)) {
          newErrors.email = t("errors.invalidEmail");
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (value && !/^\+?[\d\s-()]+$/.test(value)) {
          newErrors.phone = t("errors.invalidPhone");
        } else {
          delete newErrors.phone;
        }
        break;

      case "bio":
        if (value.length > 200) {
          newErrors.bio = t("errors.max200Characters");
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

  const handleInputFocus = (field: string) => {
    setFocusedField(field);
    scrollToInput(field);
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
    Alert.alert(
      t("editProfile.changeAvatar"),
      t("editProfile.chooseOption"),
      [
        { text: t("editProfile.takePhoto"), onPress: takePhoto },
        { text: t("editProfile.chooseFromLibrary"), onPress: pickImage },
        { text: t("editProfile.cancel"), style: "cancel" },
      ],
      { cancelable: true },
    );
  };

  // Save with sync
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

    try {
      // Update Zustand store immediately (optimistic update)
      const updatedUser = {
        id: user?.id || "1",
        ...formData,
        avatar,
      };

      setUser(updatedUser);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Sync to cloud (if you have API)
      // await syncUserData(updatedUser);

      setIsSaving(false);

      Alert.alert(t("editProfile.success"), t("editProfile.profileUpdated"), [
        { text: t("editProfile.ok"), style: "default" },
      ]);
    } catch (error) {
      setIsSaving(false);
      Alert.alert(t("errors.error"), t("errors.failedToSave"));
    }
  };

  const renderInput = (
    field: keyof FormData,
    label: string,
    icon: keyof typeof Ionicons.glyphMap,
    options: {
      placeholder: string;
      keyboardType?: "default" | "email-address" | "phone-pad";
      autoCapitalize?: "none" | "sentences" | "words" | "characters";
      multiline?: boolean;
      maxLength?: number;
    },
  ) => (
    <View
      style={styles.inputContainer}
      ref={(ref) => {
        if (ref) {
          inputRefs.current[field] = ref as any;
        }
      }}
    >
      <Text style={styles.inputLabel}>{t(label)}</Text>
      <View
        style={[
          styles.inputWrapper,
          focusedField === field && styles.inputWrapperFocused,
          errors[field] && styles.inputWrapperError,
        ]}
      >
        <View style={styles.inputIconWrapper}>
          <Ionicons
            name={icon}
            size={20}
            color={focusedField === field ? "#FFD600" : "#9E9E9E"}
          />
        </View>
        <TextInput
          style={[styles.input, options.multiline && styles.inputMultiline]}
          value={formData[field]}
          onChangeText={(value) => handleInputChange(field, value)}
          onFocus={() => handleInputFocus(field)}
          onBlur={() => setFocusedField(null)}
          placeholder={t(options.placeholder)}
          placeholderTextColor="#BDBDBD"
          keyboardType={options.keyboardType}
          autoCapitalize={options.autoCapitalize}
          multiline={options.multiline}
          maxLength={options.maxLength}
          returnKeyType={options.multiline ? "default" : "done"}
          blurOnSubmit={!options.multiline}
        />
        {!errors[field] && formData[field] && !options.multiline && (
          <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
        )}
      </View>
      {errors[field] && (
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={14} color="#FF3B30" />
          <Text style={styles.errorText}>{errors[field]}</Text>
        </View>
      )}
      {field === "bio" && (
        <Text style={styles.charCount}>{formData.bio.length}/200</Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          {/* Sticky Animated Header */}
          <Animated.View
            style={[styles.headerContainer, { height: headerHeight }]}
          >
            <Pressable
              onPress={handleAvatarPress}
              style={styles.avatarPressable}
            >
              <Animated.View
                style={[
                  styles.avatarContainer,
                  {
                    width: avatarSize,
                    height: avatarSize,
                    borderRadius: Animated.divide(avatarSize, 2),
                    borderWidth: avatarBorderWidth,
                  },
                ]}
              >
                {avatar ? (
                  <Image source={{ uri: avatar }} style={styles.avatarImage} />
                ) : (
                  <View style={styles.avatarPlaceholder}>
                    <Ionicons name="person" size={50} color="#9E9E9E" />
                  </View>
                )}
                <Animated.View
                  style={[
                    styles.avatarEditBadge,
                    {
                      opacity: scrollY.interpolate({
                        inputRange: [0, HEADER_SCROLL_DISTANCE],
                        outputRange: [1, 0],
                        extrapolate: "clamp",
                      }),
                    },
                  ]}
                >
                  <Ionicons name="camera" size={18} color="#1C1C1E" />
                </Animated.View>
              </Animated.View>
            </Pressable>

            {/* Large Title */}
            <Animated.View
              style={[
                styles.headerTitleContainer,
                { opacity: headerTitleOpacity },
              ]}
            >
              <Text style={styles.headerTitle}>{t("editProfile.title")}</Text>
              <Text style={styles.headerSubtitle}>
                {t("editProfile.tapToChange")}
              </Text>
            </Animated.View>

            {/* Mini Title (appears when scrolled) */}
            <Animated.View
              style={[styles.miniTitleContainer, { opacity: miniTitleOpacity }]}
            >
              <Text style={styles.miniTitle}>{formData.name}</Text>
            </Animated.View>
          </Animated.View>

          {/* Scrollable Content */}
          <Animated.ScrollView
            ref={scrollViewRef}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false },
            )}
            scrollEventThrottle={16}
            keyboardShouldPersistTaps="handled"
          >
            {/* Form Fields */}
            <View style={styles.formContainer}>
              {renderInput("name", "editProfile.fullName", "person", {
                placeholder: "editProfile.fullNamePlaceholder",
                autoCapitalize: "words",
              })}

              {renderInput("email", "editProfile.email", "mail", {
                placeholder: "editProfile.emailPlaceholder",
                keyboardType: "email-address",
                autoCapitalize: "none",
              })}

              {renderInput("phone", "editProfile.phone", "call", {
                placeholder: "editProfile.phonePlaceholder",
                keyboardType: "phone-pad",
              })}

              {renderInput("location", "editProfile.location", "location", {
                placeholder: "editProfile.locationPlaceholder",
                autoCapitalize: "words",
              })}

              {renderInput("language", "editProfile.language", "language", {
                placeholder: "editProfile.languagePlaceholder",
                autoCapitalize: "words",
              })}

              {renderInput("bio", "editProfile.bio", "create", {
                placeholder: "editProfile.bioPlaceholder",
                multiline: true,
                maxLength: 200,
              })}
            </View>

            <View style={{ height: 120 }} />
          </Animated.ScrollView>

          {/* Floating Save Button */}
          <View style={styles.saveButtonContainer}>
            <TouchableOpacity
              style={[styles.saveButton, isSaving && styles.saveButtonDisabled]}
              onPress={handleSave}
              disabled={isSaving}
              activeOpacity={0.8}
            >
              {isSaving ? (
                <>
                  <ActivityIndicator color="#1C1C1E" size="small" />
                  <Text style={styles.saveButtonText}>
                    {t("editProfile.syncing")}
                  </Text>
                </>
              ) : (
                <>
                  <Ionicons name="cloud-upload" size={24} color="#1C1C1E" />
                  <Text style={styles.saveButtonText}>
                    {t("editProfile.saveChanges")}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  headerContainer: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    zIndex: 10,
  },
  avatarPressable: {
    marginBottom: 12,
  },
  avatarContainer: {
    borderColor: "#FFD600",
    overflow: "hidden",
    position: "relative",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  avatarPlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarEditBadge: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#FFD600",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  headerTitleContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  miniTitleContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  miniTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    paddingHorizontal: 14,
    minHeight: 52,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  inputWrapperFocused: {
    borderColor: "#FFD600",
    backgroundColor: "#FFFEF8",
    shadowColor: "#FFD600",
    shadowOpacity: 0.2,
  },
  inputWrapperError: {
    borderColor: "#FF3B30",
    backgroundColor: "#FFF5F5",
  },
  inputIconWrapper: {
    width: 24,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1C1C1E",
    paddingVertical: 12,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingTop: 12,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginLeft: 4,
  },
  errorText: {
    fontSize: 12,
    color: "#FF3B30",
    fontWeight: "500",
  },
  charCount: {
    fontSize: 12,
    color: "#9E9E9E",
    textAlign: "right",
    marginRight: 4,
  },
  saveButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#FFD600",
    paddingVertical: 18,
    borderRadius: 16,
    shadowColor: "#FFD600",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1C1C1E",
  },
});
