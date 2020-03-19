import React from 'react';
import {TouchableHighlight} from 'react-native';
import CText from '../../components/CustomText';

const Profile = props => {
  const {navigation} = props;
  return (
    <>
      <CText>Profile</CText>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('PersonalInfo');
        }}>
        <CText>Personal Information</CText>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Billing');
        }}>
        <CText>Billing</CText>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('MyFaves');
        }}>
        <CText>My Favourite Places</CText>
      </TouchableHighlight>
    </>
  );

};

export default Profile;
