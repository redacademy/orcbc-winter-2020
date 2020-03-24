import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = React.createContext();

const AuthProvider = props => {
  const {children} = props;
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
      signInContext: async data => {
        const {user, token} = data;
        dispatch({
          type: 'SIGN_IN',
          token,
        });
      },
      signOutContext: () => dispatch({type: 'SIGN_OUT'}),
      signUpContext: async data => {
        const {user, token} = data;
        dispatch({type: 'SIGN_UP', token});
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

export default AuthProvider;
