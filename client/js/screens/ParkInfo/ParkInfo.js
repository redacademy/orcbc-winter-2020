import React from 'react';
import CText from '../../components/CustomText';
import styles from './styles';
import {TouchableHighlight} from 'react-native';

const ParkInfo = props => {
  return (
    <>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate('Calendar');
        }}>
        <CText style={styles.text}>Park Info Modal Here</CText>
      </TouchableHighlight>
    </>
  );
};

export default ParkInfo;
