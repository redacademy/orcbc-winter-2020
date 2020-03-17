import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import Itinerary from '../Itinerary';

const Trips = props => {
  console.log(props);
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
    </>
  );
};

export default Trips;
