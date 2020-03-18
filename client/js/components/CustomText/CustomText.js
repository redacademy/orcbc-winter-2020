import React from 'react';
import styles from './styles';
import {Text} from 'react-native';

const CText = props => {
  return (
    <Text style={{...styles.defaultFont, ...props.style}}>
      {props.children}
    </Text>
  );
};

export default CText;
