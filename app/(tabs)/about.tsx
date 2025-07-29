import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
const PlaceholderImage = require('@/assets/images/pic2.jpg');
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
      
      <Text style={styles.text}>Dev: Boyles, Prince Niño</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    paddingBottom: 200,

  },
   imageContainer: {
    flex: 1,
  },
  image: {
    paddingTop: 10,
    width: 320,
    height: 300,
    borderRadius: 18,
  },
});
