import React, {useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Text, ImageBackground, ScrollView, View} from 'react-native';
import MapBackground from '../../assets/P3_ORC_ImagePool/map.jpg';
import AsyncStorage from '@react-native-community/async-storage';
import LookingOut from '../../assets/P3_ORC_ImagePool/lookingout.jpg';
import HikingPeople from '../../assets/P3_ORC_ImagePool/hikingpeople.jpg';
import FlatLay from '../../assets/P3_ORC_ImagePool/flatlay.jpg';
import Marshmallow from '../../assets/P3_ORC_ImagePool/firemarshmallow.jpg';
import OnboardingComp from '../../components/OnboardingComp';
import {useNavigation} from '@react-navigation/native';

const Triangle = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'green' : 'grey';
  position = 'absolute';
  top = 400;

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

const Onboard = props => {
  const navigation = useNavigation();

  useEffect(() => {
    async function run() {
      try {
        const onBoardingDone = await AsyncStorage.getItem('isOnBoarded');
        onBoardingDone && navigation.navigate('Auth');
      } catch (error) {
        throw new Error(error);
      }
    }
    run();
  }, []);

  const callAuth = async () => {
    try {
      await AsyncStorage.setItem('isOnBoarded', JSON.stringify(true));
      navigation.navigate('Auth');
    } catch (error) {
      throw error;
    }
  };

  return (
    <Onboarding
      DotComponent={Triangle}
      onSkip={callAuth}
      onDone={callAuth}
      showNext={false}
      bottomBarHighlight={false}
      imageContainerStyles={{paddingBottom: 0}}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <OnboardingComp
              img={MapBackground}
              title="Map"
              text="Find everything you need from campsites, fuel station, hospital, and more."
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <OnboardingComp
              img={LookingOut}
              title="Trips"
              text="Keep records of your past and upcoming camping reservations.
                "
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <OnboardingComp
              img={HikingPeople}
              title="Community"
              text="Post about or upload a picture to share your recent exciting camping experience with the community."
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <OnboardingComp
              img={FlatLay}
              title="Camping Guide"
              text="Make your camping expeirnece much easier with guides for emergencies, first-aid, camping equipments, etc."
            />
          ),
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: (
            <OnboardingComp
              img={Marshmallow}
              title="Leave no Trace"
              text={
                <>
                  <Text>1. Plan ahead and prepare</Text>
                  <Text>2. Travel and camp on durable surfaces</Text>
                  <Text>3. Dispose of waste properly</Text>
                  <Text>4. Leave what you find</Text>
                  <Text>5. Minimize campfire impacts</Text>
                  <Text>6. Respect wildlife</Text>
                  <Text>7. Be considerate of others</Text>
                </>
              }
            />
          ),
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};

export default Onboard;
