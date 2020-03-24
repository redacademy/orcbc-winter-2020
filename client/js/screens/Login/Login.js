import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
    fontSize: 24,
  },
  inputTitle: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    margin: 15,
    width: '60%',
  },
  button: {
    borderWidth: 5,
    borderColor: 'grey',
  },
});

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    authContext: {signIn},
  } = React.useContext(AuthContext);

  console.log(signIn);
  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.header}>Log in with email</Text>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Log in" onPress={() => signIn({email, password})} />
        <Button
          style={styles.button}
          title="Don't have an account? Sign Up"
          onPress={() => {
            navigation.navigate('Signup');
          }}></Button>
      </View>
    </ScrollView>
  );
};
export default Login;
