import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, TextInput, Button} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginLeft: 100,
    marginBottom: 40,
    fontSize: 24,
  },
  inputTitle: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 25,
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    margin: 25,
  },
  button: {
    borderWidth: 5,
    borderColor: 'grey',
  },
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
          onPress={this.submit}></Button>
      </ScrollView>
    );
  }
}

const SIGNUP_MUTATION = gql`
  mutation($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
    }
  }
`;

export default graphql(SIGNUP_MUTATION)(Signup);
