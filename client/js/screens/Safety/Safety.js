import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
  Linking,
} from 'react-native';
import styles from './styles';

const Safety = ({navigation}) => {
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
          <Text style={styles.header}>Avalanche Safety</Text>
        </View>

        <ScrollView style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.tip}>Quick Tips</Text>
            <Text style={styles.subtitle}>
              If you become caught in an avalanche, try to:
            </Text>
            <Text style={styles.text}>
              Push machinery, equipment or heavy objects away from you to avoid
              injury. {'\n\n'}Grab onto anything solid (trees, rocks, etc.) to
              avoid being swept away. {'\n\n'}Keep your mouth closed and your
              teeth clenched. {'\n\n'}If you start moving downward with the
              avalanche, stay on the surface using a swimming motion. {'\n\n'}
              Try to move yourself to the side of the avalanche.
            </Text>
            <Text style={styles.subtitle}>
              When the avalanche slows, attempt to:
            </Text>
            <Text style={styles.text}>
              Push yourself towards the surface.{'\n\n'}Make an air pocket in
              front of your face using one arm.{'\n\n'}Push the other arm
              towards the surface.
            </Text>
            <Text style={styles.subtitle}>
              When the avalanche stops, begin to:
            </Text>
            <Text style={styles.text}>
              Dig yourself out, if possible.{'\n\n'}Relax your breathing,
              particularly if you cannot dig yourself out. {'\n\n'}Stay calm and
              shout only when a searcher is near.
            </Text>
            <Text style={styles.subtitle}>Before your trip</Text>
            <Text style={styles.text}>
              Preparedness is key to safety in avalanche-prone areas.{'\n\n'}We
              recommend taking the short education program offered by Avalanche
              Canada. It is available at:
            </Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.avalanche.ca/tutorial')
              }>
              <Text style={styles.link}>Avalanche Canada - Tutorial{'\n'}</Text>
            </TouchableOpacity>
            <View style={styles.tabs}>
              <Text style={styles.subtitle}>
                Gear and Safety Equipment{'\n'}
              </Text>
              <Image
                style={styles.chevron}
                source={require('../../assets/Guide/images/chevron-up.png')}
              />
            </View>
            <View style={styles.tabs}>
              <Text style={styles.subtitle}>Pre-trip Planning{'\n'}</Text>
              <Image
                style={styles.chevron}
                source={require('../../assets/Guide/images/chevron-up.png')}
              />
            </View>
            <View style={styles.tabs}>
              <Text style={styles.subtitle}>Risk Reduction{'\n'}</Text>
              <Image
                style={styles.chevron}
                source={require('../../assets/Guide/images/chevron-up.png')}
              />
            </View>
            <View style={styles.tabs}>
              <Text style={styles.subtitle}>Rescue{'\n'}</Text>
              <Image
                style={styles.chevron}
                source={require('../../assets/Guide/images/chevron-up.png')}
              />
            </View>
            <View style={styles.tabs}>
              <Text style={styles.subtitle}>Incident Reporting</Text>
              <Image
                style={styles.chevron}
                source={require('../../assets/Guide/images/chevron-up.png')}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Safety;
