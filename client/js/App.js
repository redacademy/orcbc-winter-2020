import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStack />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
