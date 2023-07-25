import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from './components/AppHeader';

export default function App() {
  return (
    <View style={styles.container}>
       <AppHeader />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
});
