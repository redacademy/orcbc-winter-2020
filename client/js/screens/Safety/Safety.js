import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

const Safety = () => {
  return (
    <SafeAreaView>
      <Image source={require('../../assets/Guide/images/avalanche.jpg')} />

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 55,
          zIndex: 2,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Montserrat'}}>
          Avalanche Safety
        </Text>
      </View>
      <View
        style={{
          marginTop: 24,
          borderRadiusLeft: 50,
          borderRadiusRight: 50,
          backgroundColor: 'white',
          zIndex: 1,
        }}></View>
    </SafeAreaView>
  );
};

export default Safety;
