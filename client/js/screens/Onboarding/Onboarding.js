import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text, ImageBackground, Image, ScrollView, View} from 'react-native';
import MapBackground from '../../assets/P3_ORC_ImagePool/map.jpg';

const Triangle = ({isLight, selected}) => {
  let backgroundColor;
  // if(isLight) {
  backgroundColor = selected ? 'green' : 'grey';
  // } else {
  //   background
  // }
  return (
    <View
      style={{
        width: 0,
        height: 0,
        borderLeftWidth: 7.5,
        borderRightWidth: 7.5,
        borderBottomWidth: 15,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: backgroundColor,
        marginRight: 20,
      }}
    />
  );
};

const Onboard = () => {
  return (
    <ScrollView>
      <Onboarding
        DotComponent={Triangle}
        imageContainerStyles={{paddingBottom: 0}}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <ImageBackground
                source={MapBackground}
                style={{width: '100%', height: '100%'}}>
                <View
                  style={{
                    marginTop: 300,
                    backgroundColor: 'white',
                    opacity: 0.75,
                    alignItems: 'center',
                    justifyItems: 'center',
                  }}>
                  <Text>Map</Text>
                  <Text>
                    Find everything you need from campsites, fuel station,
                    hospital, and more.
                  </Text>
                </View>
              </ImageBackground>
            ),
            title: 'Map',
            subtitle:
              'Find everything you need from campsites, fuel station, hospital, and more.',
            // titleStyles: {position: 'absolute'},
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/P3_ORC_ImagePool/Lake1.jpeg')}
                style={{height: '100%', width: '100%', opacity: 1}}
              />
            ),
            title: 'Trips',
            subtitle:
              'Keep records of your past and upcoming camping reservations.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/P3_ORC_ImagePool/Lake1.jpeg')}
                style={{height: '100%', width: '100%', opacity: 1}}
              />
            ),
            title: 'Community',
            subtitle:
              'Post about or upload a picture to share your recent exciting camping experience with the community.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/P3_ORC_ImagePool/Lake1.jpeg')}
                style={{height: '100%', width: '100%', opacity: 1}}
              />
            ),
            title: 'Camping Guide',
            subtitle:
              'Make your camping expeirnece much easier with guides for emergencies, first-aid, camping equipments, etc.',
            containerStyles: {backgroundColor: 'red'},
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/P3_ORC_ImagePool/Lake1.jpeg')}
                style={{height: '100%', width: '100%', opacity: 1}}
              />
            ),
            title: 'Leave no Trace',
            subtitle:
              '1) Plan ahead and prepare 2) Travel and camp on durable surfaces 3) Dispose of waste properly 4) Leave what you find 5) Minimize campfire impacts 6) Respect wildlife 7) Be considerate of others',
            containerStyles: {backgroundColor: 'red'},
          },
        ]}
      />
    </ScrollView>
  );
};

export default Onboard;
