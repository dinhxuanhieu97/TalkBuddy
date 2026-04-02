import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthService } from "../services";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      const user = await AuthService.signUpWithEmail(email, password, name);

      if (user) {
        // Navigate to main app with tabs
        router.replace("/(tabs)");
      } else {
        Alert.alert("Error", "Failed to create account");
      }
    } catch (error) {
      console.error("Register error:", error);
      Alert.alert("Error", "Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setIsLoading(true);
    try {
      const user = await AuthService.signInWithGoogle();

      if (user) {
        // Navigate to main app with tabs
        router.replace("/(tabs)");
      } else {
        Alert.alert("Error", "Failed to sign up with Google");
      }
    } catch (error) {
      console.error("Google register error:", error);
      Alert.alert("Error", "Failed to sign up with Google. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleRegister = () => {
    // TODO: Implement Apple Login
    console.log("Apple Register");
    Alert.alert("Coming Soon", "Apple Login will be available soon!");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      <LinearGradient
        colors={["#f9f9f9", "#ffd200"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Create Account</Text>
              <Text style={styles.subtitle}>
                Start your English learning journey
              </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Name */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#999"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                  autoCorrect={false}
                  editable={!isLoading}
                />
              </View>

              {/* Email */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#999"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  editable={!isLoading}
                />
              </View>

              {/* Password */}
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Create a password"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    editable={!isLoading}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeButton}
                    disabled={isLoading}
                  >
                    <Text style={styles.eyeText}>
                      {showPassword ? "👁️" : "👁️‍🗨️"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Terms */}
              <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                  By signing up, you agree to our{" "}
                  <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
                  <Text style={styles.termsLink}>Privacy Policy</Text>
                </Text>
              </View>

              {/* Register Button */}
              <TouchableOpacity
                onPress={handleRegister}
                style={[
                  styles.registerButton,
                  isLoading && styles.disabledButton,
                ]}
                activeOpacity={0.8}
                disabled={isLoading}
              >
                <Text style={styles.registerButtonText}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Text>
              </TouchableOpacity>

              {/* Divider */}
              <View style={styles.divider}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Buttons */}
              <View style={styles.socialContainer}>
                {/* Google */}
                <TouchableOpacity
                  onPress={handleGoogleRegister}
                  style={[
                    styles.socialButton,
                    isLoading && styles.disabledButton,
                  ]}
                  activeOpacity={0.8}
                  disabled={isLoading}
                >
                  <Text style={styles.socialIcon}>G</Text>
                  <Text style={styles.socialText}>Google</Text>
                </TouchableOpacity>

                {/* Apple */}
                <TouchableOpacity
                  onPress={handleAppleRegister}
                  style={[
                    styles.socialButton,
                    isLoading && styles.disabledButton,
                  ]}
                  activeOpacity={0.8}
                  disabled={isLoading}
                >
                  <Ionicons name="logo-apple" size={20} color="#1c1c1e" />
                  <Text style={styles.socialText}>Apple</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => router.back()}
                disabled={isLoading}
              >
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  gradient: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#1c1c1e",
    opacity: 0.6,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1c1c1e",
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1c1c1e",
  },
  eyeButton: {
    padding: 16,
  },
  eyeText: {
    fontSize: 18,
  },
  termsContainer: {
    marginBottom: 24,
  },
  termsText: {
    fontSize: 13,
    color: "#1c1c1e",
    opacity: 0.6,
    lineHeight: 20,
  },
  termsLink: {
    fontWeight: "600",
    color: "#1c1c1e",
  },
  registerButton: {
    backgroundColor: "#1c1c1e",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  disabledButton: {
    opacity: 0.6,
  },
  registerButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffd200",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(28,28,30,0.1)",
  },
  dividerText: {
    fontSize: 14,
    color: "#1c1c1e",
    opacity: 0.5,
    marginHorizontal: 16,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "rgba(28,28,30,0.1)",
    gap: 8,
  },
  socialIcon: {
    fontSize: 18,
    fontWeight: "700",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: "#1c1c1e",
    opacity: 0.6,
  },
  signInText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1c1c1e",
  },
});
