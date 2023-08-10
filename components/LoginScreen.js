import React, { useState } from 'react';
import { ScrollView, Text, Pressable, TextInput, StyleSheet} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, onLogin] = useState(false);

  return (
    <ScrollView style={styles.container} keyboardDismissMode={'on-drag'}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}
      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder='Email'
            keyboardType={'email-address'}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder='Password'
          />
          { password && email &&
            <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          }
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
  headerText: {
    padding: 40,
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});
