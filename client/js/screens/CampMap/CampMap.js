import React, {useState} from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import MapStyle from './MapStyle';
import styles from './styles';

Geocoder.init('API_KEY', {language: 'en'});

export default () => {
  const [value, onChangeText] = useState('');
  const [region, setRegion] = useState({
    latitude: 49.26335,
    longitude: -123.13703,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const GetCoordinates = () => {
    Geocoder.from(value)
      .then(json => {
        let location = json.results[0].geometry.location;
        console.log(location);
        setRegion({
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      })
      .catch(error => console.warn(error));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <View style={styles.search}>
            <TextInput
              style={styles.text}
              placeholder="Search"
              value={value}
              onChangeText={text => onChangeText(text)}
              onSubmitEditing={GetCoordinates}
            />
          </View>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapStyle}
          style={styles.map}
          region={region}
          zoomEnabled={true}
          zoomTapEnabled={true}
          showsMyLocationButton={true}
          showsUserLocation={true}></MapView>
      </View>
    </TouchableWithoutFeedback>
  );
};
