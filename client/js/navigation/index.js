import React from 'react';
import Navigation from './navigation';
import Cancel from '../screens/Cancel';
import Calendar from '../screens/Calendar';
import ParkInfo from '../screens/ParkInfo';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="Main" component={Navigation} />
    <RootStack.Screen name="ParkInfo" component={ParkInfo} />
    <RootStack.Screen name="Calendar" component={Calendar} />
    <RootStack.Screen name="Cancel" component={Cancel} />
  </RootStack.Navigator>
);

export default RootStackScreens;
