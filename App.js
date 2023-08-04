import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
// import WelcomeScreen from './components/WelcomeScreen';
// import MenuItems from './components/MenuItems';
// import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';

export default function App() {

  return (
    <>
      <View style={styles.header}>
        <AppHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        {/* <FeedbackForm /> */}
        <LoginScreen />
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
    backgroundColor: '#333333'
  }
});
