import React from 'react';
import {ScrollView, View, Text, TextInput, Button} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../context/AuthProvider';
import gql from 'graphql-tag';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
      }
      token
    }
  }
`;

const authClient = new ApolloClient({
  uri: 'http://localhost:8383/',
});

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {
    authContext: {signInContext},
  } = React.useContext(AuthContext);

  return (
    <Mutation mutation={LOGIN_MUTATION} client={authClient}>
      {loginMutation => (
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.header}>Log in with email</Text>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Button
              title="Log in"
              onPress={async () => {
                console.log(loginMutation);
                const res = await loginMutation({
                  variables: {email, password},
                });
                const {token, user} = await res.data.login;
                if (token) {
                  signInContext({token, user});
                }
              }}
            />
            <Button
              style={styles.button}
              title="Don't have an account? Sign Up"
              onPress={async () => {
                navigation.navigate('Signup');
              }}></Button>
          </View>
        </ScrollView>
      )}
    </Mutation>
  );
};
export default Login;
