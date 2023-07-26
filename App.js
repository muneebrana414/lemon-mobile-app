import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

export default function App() {
  let showMenu = false
  return (
    <>
      <View style={styles.header}>
        <AppHeader />
        {showMenu ? <MenuItems /> : <WelcomeScreen />}
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
  }
});
