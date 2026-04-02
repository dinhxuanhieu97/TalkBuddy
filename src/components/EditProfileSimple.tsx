import { useState, useRef } from 'react';
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
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useUserStore } from '../stores/userStore';

interface FormData {
  name: string;
  email: string;
  phone: string;
  bio: string;
  location: string;
  language: string;
}

export function EditProfileSimple() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  
  const [formData, setFormData] = useState<FormData>({
    name: user?.name || 'Traveler',
    email: user?.email || 'traveler@talkbuddy.app',
    phone: user?.phone || '',
    bio: user?.bio || '',
    location: user?.location || '',
    language: user?.language || 'English',
  });

  const [avatar, setAvatar] = useState<string | undefined>(user?.avatar);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  // Dismiss keyboard when tap outside
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  // Validation
  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.length < 2) {
          newErrors.name = 'Min 2 characters';
        } else {
          delete newErrors.name;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Invalid email';
        } else {
          delete newErrors.email;
        }
        break;

      case 'phone':
        if (value && !/^\+?[\d\s-()]+$/.test(value)) {
          newErrors.phone = 'Invalid phone';
        } else {
          delete newErrors.phone;
        }
        break;

      case 'bio':
        if (value.length > 200) {
          newErrors.bio = 'Max 200 characters';
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
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need camera roll permissions.');
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
    
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'We need camera permissions.');
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
      'Change Avatar',
      'Choose an option',
      [
        { text: 'Take Photo', onPress: takePhoto },
        { text: 'Choose from Library', onPress: pickImage },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  // Save with sync
  const handleSave = async () => {
    // Validate all fields
    Object.keys(formData).forEach((key) => {
      validateField(key as keyof FormData, formData[key as keyof FormData]);
    });

    if (Object.keys(errors).length > 0) {
      Alert.alert('Validation Error', 'Please fix the errors before saving.');
      return;
    }

    setIsSaving(true);

    try {
      // Update Zustand store immediately (optimistic update)
      const updatedUser = {
        id: user?.id || '1',
        ...formData,
        avatar,
      };
      
      setUser(updatedUser);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSaving(false);
      
      Alert.alert(
        '✅ Success',
        'Profile updated and synced successfully!',
        [{ text: 'OK', style: 'default' }]
      );
    } catch (error) {
      setIsSaving(false);
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    }
  };

  const renderInput = (
    field: keyof FormData,
    label: string,
    icon: keyof typeof Ionicons.glyphMap,
    options: {
      placeholder: string;
      keyboardType?: 'default' | 'email-address' | 'phone-pad';
      autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
      multiline?: boolean;
      maxLength?: number;
    }
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
            color={focusedField === field ? '#FFD600' : '#9E9E9E'}
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
          returnKeyType={options.multiline ? 'default' : 'done'}
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
      {field === 'bio' && (
        <Text style={styles.charCount}>
          {formData.bio.length}/200
        </Text>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          {/* Static Header - Avatar Left + Name/Email Right */}
          <View style={styles.headerContainer}>
            <Pressable onPress={handleAvatarPress} style={styles.avatarContainer}>
              {avatar ? (
                <Image source={{ uri: avatar }} style={styles.avatar} />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <Ionicons name="person" size={40} color="#9E9E9E" />
                </View>
              )}
              <View style={styles.avatarEditBadge}>
                <Ionicons name="camera" size={16} color="#1C1C1E" />
              </View>
            </Pressable>

            <View style={styles.headerInfo}>
              <Text style={styles.headerName} numberOfLines={1}>
                {formData.name || 'Your Name'}
              </Text>
              <Text style={styles.headerEmail} numberOfLines={1}>
                {formData.email || 'your@email.com'}
              </Text>
              <Text style={styles.headerHint}>Tap avatar to change photo</Text>
            </View>
          </View>

          {/* Scrollable Form */}
          <ScrollView
            ref={scrollViewRef}
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.formContainer}>
              {renderInput('name', 'Full Name *', 'person', {
                placeholder: 'Enter your name',
                autoCapitalize: 'words',
              })}

              {renderInput('email', 'Email Address *', 'mail', {
                placeholder: 'your@email.com',
                keyboardType: 'email-address',
                autoCapitalize: 'none',
              })}

              {renderInput('phone', 'Phone Number', 'call', {
                placeholder: '+1 (555) 123-4567',
                keyboardType: 'phone-pad',
              })}

              {renderInput('location', 'Location', 'location', {
                placeholder: 'City, Country',
                autoCapitalize: 'words',
              })}

              {renderInput('language', 'Preferred Language', 'language', {
                placeholder: 'e.g., English, Vietnamese',
                autoCapitalize: 'words',
              })}

              {renderInput('bio', 'Bio', 'create', {
                placeholder: 'Tell us about yourself...',
                multiline: true,
                maxLength: 200,
              })}

              {/* Save Button - Inside ScrollView, below keyboard */}
              <TouchableOpacity
                style={[styles.saveButton, isSaving && styles.saveButtonDisabled]}
                onPress={handleSave}
                disabled={isSaving}
                activeOpacity={0.8}
              >
                {isSaving ? (
                  <>
                    <ActivityIndicator color="#1C1C1E" size="small" />
                    <Text style={styles.saveButtonText}>Syncing...</Text>
                  </>
                ) : (
                  <>
                    <Ionicons name="cloud-upload" size={24} color="#1C1C1E" />
                    <Text style={styles.saveButtonText}>Save & Sync</Text>
                  </>
                )}
              </TouchableOpacity>

              {/* Bottom padding */}
              <View style={{ height: 40 }} />
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFD600',
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3F3F5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  avatarEditBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFD600',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  headerInfo: {
    flex: 1,
    gap: 4,
  },
  headerName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  headerEmail: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  headerHint: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
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
    fontWeight: '600',
    color: '#1C1C1E',
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    paddingHorizontal: 14,
    minHeight: 52,
    gap: 10,
  },
  inputWrapperFocused: {
    borderColor: '#FFD600',
    backgroundColor: '#FFFEF8',
  },
  inputWrapperError: {
    borderColor: '#FF3B30',
    backgroundColor: '#FFF5F5',
  },
  inputIconWrapper: {
    width: 24,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1C1C1E',
    paddingVertical: 12,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#FF3B30',
    fontWeight: '500',
  },
  charCount: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'right',
    marginRight: 4,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#FFD600',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  saveButtonDisabled: {
    opacity: 0.6,
  },
  saveButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1C1C1E',
  },
});
