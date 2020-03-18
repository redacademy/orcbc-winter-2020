import React from 'react';
import CText from '../CustomText';
import {ImageBackground, View} from 'react-native';

const OnboardingComp = ({img, title, text}) => {
  return (
    <ImageBackground source={img} style={{width: '100%', height: '100%'}}>
      <View
        style={{
          marginTop: 500,
          width: '70%',
          backgroundColor: 'white',
          alignSelf: 'center',
          opacity: 0.75,
          padding: 30,
          alignItems: 'center',
          justifyItems: 'center',
          borderRadius: 10,
        }}>
        <CText>{title}</CText>
        <CText>{text}</CText>
      </View>
    </ImageBackground>
  );
};

export default OnboardingComp;
