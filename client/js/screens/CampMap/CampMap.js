import React from 'react';
import {TouchableHighlight} from 'react-native';
import CText from '../../components/CustomText';

class CampMap extends React.Component {
  render() {
    return (
      <>
        <CText>Map</CText>
        <TouchableHighlight
          onPress={() => {
            this.props.navigation.navigate('ParkInfo');
          }}>
          <CText>park info</CText>
        </TouchableHighlight>
      </>
    );
  }
}

export default CampMap;
