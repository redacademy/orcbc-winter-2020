import React, {useEffect} from 'react';
import App from './navigation';
import OnBoarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Cancel from '../screens/Cancel';
import Calendar from '../screens/Calendar';
import ParkInfo from '../screens/ParkInfo';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthProvider';
import CampMap from '../screens/CampMap'; // remove
const AuthStack = createStackNavigator();

const AuthStackScreens = props => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};
const RootStack = createStackNavigator();

const RootStackScreens = props => {
  return (
    <AuthContext.Consumer>
      {({state}) => (
        <RootStack.Navigator mode="modal" headerMode="none">
          {state.userToken ? (
            <>
              <RootStack.Screen name="OnBoarding" component={OnBoarding} />
              <RootStack.Screen name="Auth" component={AuthStackScreens} />
            </>
          ) : (
            <>
              <RootStack.Screen name="Main" component={App} />
              <RootStack.Screen name="Maps" component={CampMap} />
              <RootStack.Screen name="ParkInfo" component={ParkInfo} />
              <RootStack.Screen name="Calendar" component={Calendar} />
              <RootStack.Screen name="Cancel" component={Cancel} />
            </>
          )}
        </RootStack.Navigator>
      )}
    </AuthContext.Consumer>
  );
};

export default RootStackScreens;
