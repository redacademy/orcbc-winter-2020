import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {flowRight as compose} from 'lodash';

export const AuthContext = React.createContext();

const AuthProvider = props => {
  // console.log(props);
  const {children, signupMutation, loginMutation} = props;
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        const res = await loginMutation({
          variables: data,
        });
        console.log(res);
        dispatch({
          type: 'SIGN_IN',
          token: 'token goes here',
        });
        console.log(data);
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // console.log(data);
        const res = await signupMutation({
          variables: data,
        });
        console.log(res);
        dispatch({type: 'SIGN_UP', token: 'token goes here'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={{authContext, state}}>
      {children}
    </AuthContext.Provider>
  );
};

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
export default compose(
  graphql(LOGIN_MUTATION, {
    name: 'loginMutation',
  }),
  graphql(SIGNUP_MUTATION, {
    name: 'signupMutation',
  }),
)(AuthProvider);
