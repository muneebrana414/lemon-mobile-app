import { Text, View, StyleSheet } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>
         All rights reserved by M Muneeb, 2023{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
    marginBottom: 10,
  },
  footer: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});
