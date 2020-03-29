import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';
import styles from './styles';
import {AuthContext} from '../../context/AuthProvider';

const PaymentMethod = () => {
  return (
    <PageLayout
      imageSource={require('../../assets/P3_ORC_ImagePool/eveningcamp.jpg')}
      title="Payment Method"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'flex'}}
      pageContent={
        <>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <TouchableOpacity
              style={{
                width: 67,
                height: 34,
                borderWidth: 2,
                borderColor: '#F5AF15',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <CText style={{color: '#F5AF15', fontWeight: '600'}}>Edit</CText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 67,
                height: 34,
                marginLeft: 16,
                marginRight: 16,
                borderWidth: 1,
                borderColor: '#F5AF15',
                backgroundColor: '#F5AF15',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <CText style={{color: '#fff', fontWeight: '600'}}>Add</CText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 300,
              width: 340,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../../assets/P3_ORC_ImagePool/visa.png')}
              style={{
                height: 216,
                width: 340,
              }}
            />
          </View>
        </>
      }
    />
  );
};

export default PaymentMethod;
