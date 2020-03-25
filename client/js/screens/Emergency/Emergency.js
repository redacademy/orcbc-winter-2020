import React from 'react';
import {TouchableHighlight, Image, View} from 'react-native';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';
import styles from './styles';
const Emergency = ({navigation}) => {
  return (
    <PageLayout
      imageSource={require('../../assets/Guide/images/avalanche.png')}
      title="Emergency Guides"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'flex'}}
      pageContent={
        <>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate();
            }}>
            <View style={styles.clickable}>
              <CText style={styles.text}> First Aid</CText>
              <Image
                source={require('../../assets/guideIcons/02-icon-first-aid-kit.png')}
                style={styles.icon}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate();
            }}>
            <View style={styles.clickable}>
              <CText style={styles.text}>Natural Disasters</CText>
              <Image
                source={require('../../assets/guideIcons/09-icon-natural-disasters.png')}
                style={styles.icon}
              />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Avalanche');
            }}>
            <View style={styles.clickable}>
              <CText style={styles.text}>Avalanche Safety</CText>
              <Image
                source={require('../../assets/guideIcons/07-icon-avalanche.png')}
                style={styles.avalanche}
              />
            </View>
          </TouchableHighlight>
        </>
      }
    />
  );
};

export default Emergency;
