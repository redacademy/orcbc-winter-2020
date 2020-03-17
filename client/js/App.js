import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStack from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        Feed Me
      </Text> */}
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
