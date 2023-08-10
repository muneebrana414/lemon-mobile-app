import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
// import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          {/* <AppHeader /> */}
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#EE9972',
              },
              headerTintColor: 'black'
            }}
            >
            <Stack.Screen name="Home" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuItems} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <AppFooter />
        </View>
      </NavigationContainer>
    <StatusBar style="auto" />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
  footerContainer: { backgroundColor: '#333333' },
});
