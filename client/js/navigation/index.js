import React from 'react';
import Navigation from './navigation';
import OnBoarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Cancel from '../screens/Cancel';
import Calendar from '../screens/Calendar';
import ParkInfo from '../screens/ParkInfo';
import {createStackNavigator} from '@react-navigation/stack';
import {State} from 'react-native-gesture-handler';

const LoginStack = createStackNavigator();

const LoginStackScreens = props => {
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen name="Login" component={Login} />
    </LoginStack.Navigator>
  );
};

const SignupStack = createStackNavigator();

const SignupStackScreens = props => {
  return (
    <SignupStack.Navigator initialRouteName="Signup">
      <SignupStack.Screen name="Signup" component={Signup} />
    </SignupStack.Navigator>
  );
};

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    {State.userToken == null ? (
      <>
        {/* <RootStack.Screen name="OnBoarding" component={OnBoarding} /> */}
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Signup" component={Signup} />
      </>
    ) : (
      <>
        <RootStack.Screen name="Main" component={Navigation} />
        <RootStack.Screen name="ParkInfo" component={ParkInfo} />
        <RootStack.Screen name="Calendar" component={Calendar} />
        <RootStack.Screen name="Cancel" component={Cancel} />
      </>
    )}
  </RootStack.Navigator>
);

export default RootStackScreens;
