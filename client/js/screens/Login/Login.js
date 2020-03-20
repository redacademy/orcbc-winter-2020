import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {AuthContext} from '../../context/AuthProvider';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    authContext: {signIn},
  } = React.useContext(AuthContext);

  return (
    <View style={styles.content}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({email, password})} />
      <Button
        title="Don't have an account?"
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        Sign up
      </Button>
    </View>
  );
};
export default Login;
