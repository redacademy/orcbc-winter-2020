import React from 'react';
import CText from '../../components/CustomText';
import {
  SafeAreaView,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

onPress = () => {};

const AddCard = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/Guide/images/eveningcamp.jpg')}>
        <View style={styles.darken}>
          <CText style={styles.headerTitle}>Add Card</CText>
          <View style={styles.paymentModal}>
            <TouchableOpacity style={styles.button}>
              <CText style={styles.btnText}> Save</CText>
            </TouchableOpacity>
            <CText style={styles.text}>Cardholder Name</CText>
            <TextInput style={styles.input} />
            <CText style={styles.text}>Card Number</CText>
            <TextInput style={styles.input} />
            <CText style={styles.text}>Exprires</CText>
            <TextInput style={styles.input} />
            <CText style={styles.text}>CVV</CText>
            <TextInput style={styles.input} />
            <CText style={styles.text}>Country</CText>
            <TextInput style={styles.input} />
            <CText style={styles.text}>Postal Code</CText>
            <TextInput style={styles.input} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AddCard;
