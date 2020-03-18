import React, {useState} from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapStyle from './MapStyle';
import styles from './styles';

export default () => {
  const [value, onChangeText] = useState('');
  const [region, setRegion] = useState({
    latitude: 49.26335,
    longitude: -123.13703,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <View style={styles.search}>
            <TextInput
              style={styles.text}
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
          initialRegion={region}></MapView>
      </View>
    </TouchableWithoutFeedback>
  );
};
