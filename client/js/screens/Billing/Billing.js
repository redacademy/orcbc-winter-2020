import React from 'react';
import CText from '../../components/CustomText';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

// onPress = () => {};

const Billing = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/Guide/images/eveningcamp.jpg')}>
        <View style={styles.darken}>
          <CText style={styles.headerTitle}>Payment Method</CText>
          <View style={styles.paymentModal}>
            <CText style={styles.text}>
              Add secure credit or debit cards to make secure online payments
              for site
            </CText>
            <TouchableOpacity style={styles.button}>
              <CText style={styles.btnText}> Continue</CText>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Billing;
