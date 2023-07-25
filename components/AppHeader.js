import { Text, View, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#F4CE14'
  },
  text: {
    fontSize: 30,
    padding: 40,
    color: 'black',
    textAlign: 'center',
  }
});
