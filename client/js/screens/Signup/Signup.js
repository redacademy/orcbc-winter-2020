import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Signup = ({navigation}) => {
  return (
    <View style={styles.content}>
      <Text>Create an account</Text>
      <Text>Add sign up form here...</Text>
      <Button
        title="Already a member?"
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Login
      </Button>
    </View>
  );
};

export default Signup;
