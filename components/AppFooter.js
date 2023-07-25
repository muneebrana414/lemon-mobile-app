import { Text, View, StyleSheet } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>
         All rights are reserved by M Muneeb, 2023
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    backgroundColor: '#F4CE14', // Replace with your desired background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'absolute', // This will position the footer at the bottom
    left: 0,
    right: 0,
    bottom: 0,
    fontSize: 15,
    color: 'black',
  },
});
