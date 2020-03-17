import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text, Image} from 'react-native';

const Onboard = () => {
  return (
    <>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../assets/P3_ORC_ImagePool/Lake1.jpeg')}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
      {/* <Onboarding */}
      <Text>Onboard</Text>
    </>
  );
};

export default Onboard;
