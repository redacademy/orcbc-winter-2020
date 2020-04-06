import React from 'react';
import {ImageBackground, View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import CText from '../../components/CustomText';
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
      {(loginMutation) => (
        <ImageBackground
          style={styles.content}
          blurRadius={10}
          source={require('../../assets/P3_ORC_ImagePool/campsite.jpg')}>
          <View style={styles.content}>
            <CText style={styles.header}>Log in with email</CText>
            <CText style={styles.inputTitle}>Email</CText>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <CText style={styles.inputTitle}>Password</CText>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                const res = await loginMutation({
                  variables: {email, password},
                });
                const {token, user} = await res.data.login;
                if (token) {
                  signInContext({token, user});
                }
              }}>
              <CText style={styles.btnText}>Log in</CText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={async () => {
                navigation.navigate('Signup');
              }}>
              <CText style={styles.signupText}>
                Don't have an account?{' '}
                <CText style={styles.signupTextBold}>Sign Up</CText>
              </CText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </Mutation>
  );
};
export default Login;
