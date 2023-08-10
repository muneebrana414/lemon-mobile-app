import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import AppHeader from './components/AppHeader';
// import AppFooter from './components/AppFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
// import FeedbackForm from './components/FeedbackForm';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          {/* <AppHeader /> */}
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, size, color }) => {
                let tabIcon;

                if(route.name === 'Home'){
                  iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Menu') {
                  iconName =  'ios-list';
                } else if(route.name === 'Login'){
                  iconName = 'ios-log-in';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#EE9972',
              tabBarInactiveTintColor: 'gray',
            })}
            >
            <Tab.Screen name="Home" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Menu" component={MenuItems} />
          </Tab.Navigator>
        </View>
        {/* <View style={styles.footerContainer}>
          <AppFooter />
        </View> */}
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
