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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        Feed Me
      </Text>
    </NavigationContainer>
  );
};

export default App;
