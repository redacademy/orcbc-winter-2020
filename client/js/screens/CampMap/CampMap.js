import React from 'react';
import {View, TextInput} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyle from './MapStyle';
import styles from './styles';

export default () => {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          postion: 'absolute',
          top: '5%',
          width: '100%',
          zIndex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: '22%',
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            style={{
              fontSize: 20,
              paddingLeft: 30,
            }}
            placeholder="Search"
            onChangeText={text => onChangeText(text)}
            value={value}
          />
        </View>
      </View>
      <MapView
        customMapStyle={MapStyle}
        showsMyLocationButton={true}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 49.26335,
          longitude: -123.13703,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    </View>
  );
};
