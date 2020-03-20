import React from 'react';
import CText from '../CustomText';
import {ImageBackground, View} from 'react-native';
import styles from './styles';

const OnboardingComp = ({img, title, text}) => {
  return (
    <ImageBackground source={img} style={styles.background}>
      <View style={styles.textContainer}>
        <CText style={styles.title}>{title}</CText>
        <CText style={styles.text}>{text}</CText>
      </View>
    </ImageBackground>
  );
};

export default OnboardingComp;
