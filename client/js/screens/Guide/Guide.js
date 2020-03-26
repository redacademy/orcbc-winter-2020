import React from 'react';
import {TouchableHighlight, ScrollView, View, Image} from 'react-native';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';
import styles from './styles';

const Guide = props => {
  const {navigation} = props;
  return (
    <PageLayout
      imageSource={require('../../assets/Guide/images/avalanche.png')}
      title="Guidebook"
      onPress={() => {}}
      arrowDisplay={{display: 'none'}}
      pageContent={
        <>
          <TouchableHighlight
            style={styles.emergency}
            onPress={() => {
              navigation.navigate('Emergency');
            }}>
            <>
              <CText style={styles.title} style={styles.emergTitle}>
                Emergency{'\n'} Guidelines
              </CText>
              <Image
                source={require('../../assets/guideIcons/10-Icon-Siren.png')}
                style={styles.siren}
              />
            </>
          </TouchableHighlight>
          <CText style={styles.subheader}>Wildlife and Outdoor Guides</CText>

          <ScrollView horizontal={true} style={styles.container}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('Ethics');
              }}
              style={styles.guides}>
              <View style={styles.guideButton}>
                <Image
                  source={require('../../assets/guideIcons/03-icon-tree.png')}
                  style={styles.smallIcon}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>Outdoor Ethics</CText>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.guides}
              onPress={() => {
                navigation.navigate('Bear');
              }}>
              <>
                <Image
                  source={require('../../assets/guideIcons/01-Icon-bear.png')}
                  style={styles.smallIconBear}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>Bear Safety</CText>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.guides} onPress={() => {}}>
              <>
                <Image
                  source={require('../../assets/guideIcons/04-icon-peaks.png')}
                  style={styles.smallIcon}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>Backcountry Safety</CText>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.guides} onPress={() => {}}>
              <>
                <Image
                  source={require('../../assets/guideIcons/08-icon-campfire.png')}
                  style={styles.smallIconTall}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>Campfire Safety</CText>
                </View>
              </>
            </TouchableHighlight>
          </ScrollView>
          <CText style={styles.subheader}>Supply and Equipment Guides</CText>
          <ScrollView horizontal={true} style={styles.container}>
            <TouchableHighlight
              style={styles.guides}
              onPress={() => {
                navigation.navigate('CheckList');
              }}>
              <>
                <Image
                  source={require('../../assets/guideIcons/05-icon-tent.png')}
                  style={styles.smallIconWide}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>
                    Essential Gear {'\n'}Checklist
                  </CText>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.guides} onPress={() => {}}>
              <>
                <Image
                  source={require('../../assets/guideIcons/02-icon-first-aid-kit.png')}
                  style={styles.smallIconWide}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>First Aid</CText>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.guides} onPress={() => {}}>
              <>
                <Image
                  source={require(`../../assets/guideIcons/06-icon-vegetables.png`)}
                  style={styles.smallIcon}
                />
                <View style={styles.titleContainer}>
                  <CText style={styles.title}>Food Storage Guide</CText>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight style={styles.guides} onPress={() => {}}>
              <View style={styles.titleContainer}>
                <CText style={styles.title}>Rain Gear Guide</CText>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </>
      }
    />
  );
};
export default Guide;
