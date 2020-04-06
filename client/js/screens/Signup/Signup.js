import React, {Component} from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity} from 'react-native';
import CText from '../../components/CustomText';
import styles from './styles';
import gql from 'graphql-tag';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';
import {AuthContext} from '../../context/AuthProvider';

const SIGNUP_MUTATION = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
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

const Signup = (props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const {
    authContext: {signUpContext},
  } = React.useContext(AuthContext);

  const onSubmit = async (singupMutation) => {
    if (name && email && password) {
      const res = await singupMutation({variables: {name, email, password}});
      const data = res.data.register;
      const {user, token} = data;
      if (token) {
        signUpContext({user, token});
      }
    } else {
      setError('Please provide all the information');
    }
  };

  return (
    <Mutation mutation={SIGNUP_MUTATION} client={authClient}>
      {(singupMutation) => (
        <ImageBackground
          style={styles.content}
          blurRadius={10}
          source={require('../../assets/P3_ORC_ImagePool/campsite.jpg')}>
          <CText style={styles.header}>Create an account</CText>

          <CText style={styles.inputTitle}>Name</CText>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={styles.input}
            value={name}
          />

          <CText style={styles.inputTitle}>Email</CText>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize="none"
            style={styles.input}
          />

          <CText style={styles.inputTitle}>Password</CText>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            value={password}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => onSubmit(singupMutation)}>
            <CText style={styles.btnText}>Continue</CText>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </Mutation>
  );
};

export default Signup;
