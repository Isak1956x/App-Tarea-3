import { View, Text, Image, StyleSheet } from 'react-native';
import imag from '../assets/imgs/isaacft.jpg';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={imag} style={styles.avatar} />
      <Text style={styles.name}>Isaac Cabrera Silverio</Text>
      <Text style={styles.info}>Matrícula: 2024-0025</Text>
      <Text style={styles.info}>Email: Isaaccabrerasilverio12@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBD3EE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#334155',
    marginBottom: 6,
  },
});
