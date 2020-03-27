import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';
import styles from './styles';

const Bear = ({navigation}) => {
  return (
    <PageLayout
      imageSource={require('../../assets/Guide/images/avalanche.png')}
      title="Bear Safety"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'flex'}}
      pageContent={
        <>
          <CText style={styles.tip}>Quick Tips</CText>
          <CText style={styles.text}>
            Bring bear spray, and know how to use it.{'\n'}Never store food,
            toothpaste, perfumes or items that have any odour in your tent.
          </CText>
          <CText>Never feed a bear.{'\n'}</CText>
          <CText>Never approach a bear.{'\n'}</CText>
          <CText>Never get between a mother bear and her cubs.{'\n\n'}</CText>
          <CText style={styles.subtitle}>Bears in the area?</CText>
          <CText style={styles.text}>At the campsite:</CText>
          <CText>
            Ensure human and pet food, garbage, dirty campstoves, recyclables,
            toiletries and all other smelly items are locked away in metal
            bear-proof container provided in the park, your car or {'\n'}
          </CText>
          <CText>On the trail:{'\n'}</CText>
          <CText>
            Don't surprise a bear. Call, sing, clap or talk loudly especially
            near streams and in areas of low visibility. Watch for bears or
            their scat and tracks, any strange smells or disturbed vegetation.
            Be aware of wind direction and speed. Extra caution is warranted
            when the wind is facing you.{'\n'}
          </CText>
          <CText>In the back country: {'\n'}</CText>
          <CText>
            Designated campsites are the best options. If there are no
            designated sites, choose campsites that are away from bear sign and
            obvious bear foods like berries, waterways or other features that
            may be travel routes for wildlife.
          </CText>
        </>
      }
    />
  );
};

export default Bear;
