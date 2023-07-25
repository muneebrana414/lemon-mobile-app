import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <AppHeader />
      </View>
      <View style={styles.footer}>
        <AppFooter />
    </View>
    <StatusBar style="auto" />
  </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#495E57'
  },
  footer: {
    backgroundColor: '#495E57'
  },
});
