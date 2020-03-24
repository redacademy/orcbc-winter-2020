import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';

const Bear = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/Guide/images/avalanche.png')}
        style={styles.bg}>
        <View style={styles.banner}>
          <TouchableHighlight
            style={styles.backArrow}
            underlayColor={'transparent'}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/Guide/images/ios-arrow.png')}
            />
          </TouchableHighlight>
          <Text style={styles.header}>Bear Safety</Text>
        </View>

        <ScrollView style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.tip}>Quick Tips</Text>
            <Text style={styles.text}>
              Bring bear spray, and know how to use it.{'\n'}Never store food,
              toothpaste, perfumes or items that have any odour in your tent.
            </Text>
            <Text>Never feed a bear.{'\n'}</Text>
            <Text>Never approach a bear.{'\n'}</Text>
            <Text>Never get between a mother bear and her cubs.{'\n\n'}</Text>
            <Text style={styles.subtitle}>Bears in the area?</Text>
            <Text style={styles.text}>At the campsite:</Text>
            <Text>
              Ensure human and pet food, garbage, dirty campstoves, recyclables,
              toiletries and all other smelly items are locked away in metal
              bear-proof container provided in the park, your car or {'\n'}
            </Text>
            <Text>On the trail:{'\n'}</Text>
            <Text>
              Don't surprise a bear. Call, sing, clap or talk loudly especially
              near streams and in areas of low visibility. Watch for bears or
              their scat and tracks, any strange smells or disturbed vegetation.
              Be aware of wind direction and speed. Extra caution is warranted
              when the wind is facing you.{'\n'}
            </Text>
            <Text>In the back country: {'\n'}</Text>
            <Text>
              Designated campsites are the best options. If there are no
              designated sites, choose campsites that are away from bear sign
              and obvious bear foods like berries, waterways or other features
              that may be travel routes for wildlife.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Bear;
