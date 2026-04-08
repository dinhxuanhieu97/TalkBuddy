import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useUserStore } from '../../stores/userStore';
import { initializeMockFamily } from '../../utils/mockFamilyData';

export function TestFamilyButton() {
  const setFamily = useUserStore((state) => state.setFamily);
  const setSubscription = useUserStore((state) => state.setSubscription);
  const addCredits = useUserStore((state) => state.addCredits);

  const handleEnableFamily = () => {
    // Set subscription to family
    setSubscription('family');
    
    // Add some credits to shared pool
    addCredits(1000);
    
    // Initialize mock family data
    initializeMockFamily(setFamily, true); // true = isAdmin
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleEnableFamily}>
      <Text style={styles.buttonText}>🧪 Enable Family Plan (Test)</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#34C759',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
