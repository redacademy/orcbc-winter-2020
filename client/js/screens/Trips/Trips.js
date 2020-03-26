import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const Trips = props => {
  const {navigation, route} = props;
  return (
    <>
      <Text>Trips</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Itinerary');
        }}>
        <Text>View Itinerary</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Calendar');
        }}>
        <Text>View Calendar</Text>
      </TouchableHighlight>
    </>
  );
};

export default Trips;
