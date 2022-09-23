import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBack() {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Go to Home 🏠</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    width: 150,
    backgroundColor: '#2B2D42',
    padding: 16,
    margin: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
  },
});
