import React, {Component} from 'react';
import {ScrollView, Text, TextInput, Button} from 'react-native';
import styles from './styles';
import gql from 'graphql-tag';
import {Mutation} from '@apollo/react-components';
import ApolloClient from 'apollo-boost';

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

class Signup extends Component {
  state = {
    values: {
      name: '',
      email: '',
      password: '',
    },
    errors: {},
    isSubmitting: false,
  };

  onChangeText = (key, value) => {
    this.setState(state => ({
      values: {
        ...state.values,
        [key]: value,
      },
    }));
  };

  submit = async () => {
    if (this.state.isSubmitting) {
      return;
    }

    this.setState({isSubmitting: true});

    let response;

    try {
      response = await this.props.mutate({
        variables: this.state.values,
      });
    } catch (err) {
      console.log(err);
    }

    console.log(response);
    this.setState({isSubmitting: false});
  };

  render() {
    const {
      values: {name, email, password},
    } = this.state;

    return (
      <Mutation mutation={SIGNUP_MUTATION} client={authClient}>
        {singupMutation => (
          <ScrollView style={styles.content}>
            <Text style={styles.header}>Create an account</Text>

            <Text style={styles.inputTitle}>Name</Text>
            <TextInput
              onChangeText={text => this.onChangeText('name', text)}
              style={styles.input}
              value={name}
            />

            <Text style={styles.inputTitle}>Email</Text>
            <TextInput
              onChangeText={text => this.onChangeText('email', text)}
              style={styles.input}
              value={email}
              autoCapitalize="none"
            />

            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              onChangeText={text => this.onChangeText('password', text)}
              style={styles.input}
              value={password}
              secureTextEntry
            />

            <Button
              style={styles.button}
              title="Continue"
              onPress={this.submit}
            />
          </ScrollView>
        )}
      </Mutation>
    );
  }
}

export default Signup;
