import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Emergency from '../screens/Emergency';
import Safety from '../screens/Safety';
import CheckList from '../screens/CheckList';
import Feed from '../screens/Feed';
import Guide from '../screens/Guide';
import Itinerary from '../screens/Itinerary';
import CampMap from '../screens/CampMap';
import Ethics from '../screens/Ethics';
import Post from '../screens/Post';
import Profile from '../screens/Profile';
import Trips from '../screens/Trips';
import MyFaves from '../screens/MyFaves';
import PersonalInfo from '../screens/PersonalInfo';
import Billing from '../screens/Billing';
import AddCard from '../screens/AddCard';
import GuideIcon from '../assets/icons/guide.png';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MapStack = createStackNavigator();

const MapStackScreens = props => {
  return (
    <MapStack.Navigator initialRouteName="Map" headerMode="none">
      <MapStack.Screen name="Map" component={CampMap} />
    </MapStack.Navigator>
  );
};

const TripsStack = createStackNavigator();

const TripsStackScreens = props => {
  return (
    <TripsStack.Navigator initialRouteName="Trips" headerMode="none">
      <TripsStack.Screen name="Trips" component={Trips} />
      <TripsStack.Screen name="Itinerary" component={Itinerary} />
    </TripsStack.Navigator>
  );
};

const FeedStack = createStackNavigator();

const FeedStackScreens = props => {
  return (
    <FeedStack.Navigator initialRouteName="Feed" headerMode="none">
      <FeedStack.Screen
        name="Feed"
        component={Feed}
        options={{title: 'Community'}}
      />
      <FeedStack.Screen name="Post" component={Post} />
    </FeedStack.Navigator>
  );
};

const GuideStack = createStackNavigator();
const GuideStackScreens = props => {
  return (
    <GuideStack.Navigator initialRouteName="Guide" headerMode="none">
      <GuideStack.Screen name="Guide" component={Guide} />
      <GuideStack.Screen name="Emergency" component={Emergency} />
      <GuideStack.Screen name="Safety" component={Safety} />
      <GuideStack.Screen name="CheckList" component={CheckList} />
      <GuideStack.Screen name="Ethics" component={Ethics} />
    </GuideStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();

const ProfileStackScreens = props => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile" headerMode="none">
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="PersonalInfo" component={PersonalInfo} />
      <ProfileStack.Screen name="Billing" component={Billing} />
      <ProfileStack.Screen name="AddCard" component={AddCard} />
      <ProfileStack.Screen name="MyFaves" component={MyFaves} />
    </ProfileStack.Navigator>
  );
};

const Nav = createBottomTabNavigator();

const NavScreens = props => {
  return (
    <Nav.Navigator
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: '#CACACA',
        labelStyle: {
          fontSize: 11,
          fontFamily: 'Montserrat-Regular',
        },
      }}>
      <Nav.Screen name="Map" component={MapStackScreens} />
      <Nav.Screen name="Trips" component={TripsStackScreens} />
      <Nav.Screen name="Feed" component={FeedStackScreens} />
      <Nav.Screen name="Guide" component={GuideStackScreens} />
      <Nav.Screen name="Profile" component={ProfileStackScreens} />
    </Nav.Navigator>
  );
};

export default NavScreens;
