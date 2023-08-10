import { Text, ScrollView, View, Image, StyleSheet, Pressable } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Menu')}><Text style={styles.buttonText}>View Menu</Text></Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={styles.buttonText}>Log In</Text></Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
    marginHorizontal: 3
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
