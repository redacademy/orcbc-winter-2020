import React from 'react';
import {TouchableHighlight, TouchableOpacity} from 'react-native';
import CText from '../../components/CustomText';
import {AuthContext} from '../../context/AuthProvider';

const Profile = props => {
  const {navigation} = props;

  const {
    authContext: {signOutContext},
  } = React.useContext(AuthContext);

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

      <TouchableOpacity
        style={{height: 100, width: 200, backgroundColor: 'green'}}
        onPress={signOutContext}>
        <CText>Logout</CText>
      </TouchableOpacity>
    </>
  );
};

export default Profile;
