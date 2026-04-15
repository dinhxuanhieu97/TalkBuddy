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
  findNodeHandle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useUserStore } from "../stores/userStore";
import { useMutation } from "@tanstack/react-query";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HEADER_SCROLL_DISTANCE = 100;

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  language: string;
}

export function EditProfileModern() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [formData, setFormData] = useState<FormData>({
    name: user?.name || "Traveler",
    email: user?.email || "traveler@talkbuddy.app",
    phone: user?.phone || "012 345 6789",
    bio: user?.bio || "Passionate traveler exploring new cultures",
    location: user?.location || "Hong Kong",
    language: user?.language || "Chinese",
  });

  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    contact: true,
    about: true,
  });

  // Animations
  const scrollY = useRef(new Animated.Value(0)).current;
  const saveButtonScale = useRef(new Animated.Value(1)).current;
  const successAnimation = useRef(new Animated.Value(0)).current;

  // Avatar parallax effect
  const avatarScale = scrollY.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [1.3, 1, 0.8],
    extrapolate: "clamp",
  });

  const avatarTranslateY = scrollY.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [-50, 0, 50],
    extrapolate: "clamp",
  });

  // Validation
  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "名称是必填项";
        } else if (value.length < 2) {
          newErrors.name = "名称必须至少2个字符";
        } else {
          delete newErrors.name;
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = "电子邮件是必填项";
        } else if (!emailRegex.test(value)) {
          newErrors.email = "无效的电子邮件格式";
        } else {
          delete newErrors.email;
        }
        break;

      case "phone":
        if (value && !/^\+?[\d\s-()]+$/.test(value)) {
          newErrors.phone = "无效的电话号码";
        } else {
          delete newErrors.phone;
        }
        break;

      case "bio":
        if (value.length > 200) {
          newErrors.bio = "简介必须少于200个字符";
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

  // Toggle section with animation
  const toggleSection = (section: keyof typeof expandedSections) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  // Image Picker with Bottom Sheet style
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("权限被拒绝", "我们需要相册权限来更改您的头像。");
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
      Alert.alert("权限被拒绝", "我们需要相机权限来拍照。");
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
      "更改头像",
      "选择一个选项",
      [
        { text: "拍照", onPress: takePhoto },
        { text: "从图库选择", onPress: pickImage },
        { text: "取消", style: "cancel" },
      ],
      { cancelable: true },
    );
  };

  // Save with animation
  const handleSave = async () => {
    // Validate all fields
    Object.keys(formData).forEach((key) => {
      validateField(key as keyof FormData, formData[key as keyof FormData]);
    });

    if (Object.keys(errors).length > 0) {
      Alert.alert("验证错误", "请在保存前修复错误。");
      return;
    }

    // Button press animation
    Animated.sequence([
      Animated.timing(saveButtonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(saveButtonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setUser({
        id: user?.id || "1",
        ...formData,
        avatar,
      });

      setIsSaving(false);

      // Success animation
      Animated.sequence([
        Animated.timing(successAnimation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(1500),
        Animated.timing(successAnimation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      Alert.alert("成功", "个人资料更新成功！", [
        { text: "确定", style: "default" },
      ]);
    }, 1500);
  };

  const renderSectionHeader = (
    title: string,
    icon: keyof typeof Ionicons.glyphMap,
    section: keyof typeof expandedSections,
  ) => (
    <Pressable
      style={styles.sectionHeader}
      onPress={() => toggleSection(section)}
    >
      <View style={styles.sectionHeaderLeft}>
        <View style={styles.sectionIconContainer}>
          <Ionicons name={icon} size={20} color="#FFD600" />
        </View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <Ionicons
        name={expandedSections[section] ? "chevron-up" : "chevron-down"}
        size={20}
        color="#9E9E9E"
      />
    </Pressable>
  );

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
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
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
          onFocus={() => setFocusedField(field)}
          onBlur={() => setFocusedField(null)}
          placeholder={options.placeholder}
          placeholderTextColor="#BDBDBD"
          keyboardType={options.keyboardType}
          autoCapitalize={options.autoCapitalize}
          multiline={options.multiline}
          maxLength={options.maxLength}
        />
        {!errors[field] && formData[field] && !options.multiline && (
          <Animated.View style={{ opacity: 1 }}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
          </Animated.View>
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
      {/* Animated Header with Parallax Avatar */}
      <Animated.View
        style={[
          styles.headerContainer,
          {
            transform: [{ translateY: avatarTranslateY }],
          },
        ]}
      >
        <Pressable onPress={handleAvatarPress} style={styles.avatarPressable}>
          <Animated.View
            style={[
              styles.avatarContainer,
              {
                transform: [{ scale: avatarScale }],
              },
            ]}
          >
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={50} color="#9E9E9E" />
              </View>
            )}
            <View style={styles.avatarEditBadge}>
              <Ionicons name="camera" size={18} color="#1C1C1E" />
            </View>
          </Animated.View>
        </Pressable>
        <Text style={styles.headerTitle}>编辑个人资料</Text>
        <Text style={styles.headerSubtitle}>点击头像更改照片</Text>
      </Animated.View>

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
      >
        {/* 基本信息 */}
        <View style={styles.section}>
          {renderSectionHeader("基本信息", "person-circle", "basic")}
          {expandedSections.basic && (
            <View style={styles.sectionContent}>
              {renderInput("name", "全名", "person", {
                placeholder: "输入您的姓名",
                autoCapitalize: "words",
              })}
              {renderInput("language", "首选语言", "language", {
                placeholder: "例如，English, Vietnamese",
                autoCapitalize: "words",
              })}
            </View>
          )}
        </View>

        {/* 联系信息 */}
        <View style={styles.section}>
          {renderSectionHeader("联系信息", "mail", "contact")}
          {expandedSections.contact && (
            <View style={styles.sectionContent}>
              {renderInput("email", "电子邮件地址", "mail", {
                placeholder: "your@email.com",
                keyboardType: "email-address",
                autoCapitalize: "none",
              })}
              {renderInput("phone", "电话号码", "call", {
                placeholder: "+1 (555) 123-4567",
                keyboardType: "phone-pad",
              })}
              {renderInput("location", "位置", "location", {
                placeholder: "城市，国家",
                autoCapitalize: "words",
              })}
            </View>
          )}
        </View>

        {/* 关于您 */}
        <View style={styles.section}>
          {renderSectionHeader("关于您", "information-circle", "about")}
          {expandedSections.about && (
            <View style={styles.sectionContent}>
              {renderInput("bio", "简介", "create", {
                placeholder: "告诉我们关于您的事...",
                multiline: true,
                maxLength: 200,
              })}
            </View>
          )}
        </View>

        <View style={{ height: 120 }} />
      </Animated.ScrollView>

      {/* Floating Save Button */}
      <Animated.View
        style={[
          styles.saveButtonContainer,
          {
            transform: [{ scale: saveButtonScale }],
          },
        ]}
      >
        <TouchableOpacity
          style={[styles.saveButton, isSaving && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={isSaving}
          activeOpacity={0.8}
        >
          {isSaving ? (
            <ActivityIndicator color="#1C1C1E" size="small" />
          ) : (
            <>
              <Ionicons name="checkmark-circle" size={24} color="#1C1C1E" />
              <Text style={styles.saveButtonText}>保存更改</Text>
            </>
          )}
        </TouchableOpacity>
      </Animated.View>

      {/* Success Indicator */}
      <Animated.View
        style={[
          styles.successIndicator,
          {
            opacity: successAnimation,
            transform: [
              {
                scale: successAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                }),
              },
            ],
          },
        ]}
        pointerEvents="none"
      >
        <View style={styles.successBadge}>
          <Ionicons name="checkmark-circle" size={60} color="#4CAF50" />
          <Text style={styles.successText}>保存成功</Text>
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
  },
  avatarPressable: {
    marginBottom: 16,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#FFD600",
  },
  avatarPlaceholder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#E0E0E0",
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
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  sectionIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF9E6",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  sectionContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
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
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#F0F0F0",
    paddingHorizontal: 14,
    minHeight: 52,
    gap: 10,
  },
  inputWrapperFocused: {
    borderColor: "#FFD600",
    backgroundColor: "#FFFEF8",
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
  successIndicator: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  successBadge: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
    paddingHorizontal: 50,
    borderRadius: 24,
    alignItems: "center",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  successText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4CAF50",
  },
});
