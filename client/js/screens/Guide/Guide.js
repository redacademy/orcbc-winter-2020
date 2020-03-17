import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
// import CText from '../../components/CustomText';
const Guide = props => {
  const {navigation} = props;
  return (
    <>
      <Text>Guide</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Emergency');
        }}>
        <Text> Emergency Guidelines</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Ethics');
        }}>
        <Text>Outdoor Ethics</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('CheckList');
        }}>
        <Text>Gear Packing List</Text>
      </TouchableHighlight>
    </>
  );
};
export default Guide;
