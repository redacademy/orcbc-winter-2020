import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableHighlight,
  ImageBackground,
  ScrollView,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './styles';

const Bear = ({navigation}) => {
  const [checked, setChecked] = useState({});

  const handleChange = event => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };

  const checkboxes = [
    {
      name: 'check-box-1',
      key: 'checkBox1',
      label: 'Check Box 1',
    },
    {
      name: 'check-box-2',
      key: 'checkBox2',
      label: 'Check Box 2',
    },
  ];
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/Guide/images/avalanche.png')}
        style={styles.bg}>
        <View style={styles.banner}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/Guide/images/ios-arrow.png')}
            />
          </TouchableHighlight>
          <Text style={styles.header}>Gear Packing List</Text>
        </View>

        <ScrollView style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.seasonToggle}>
              {'< '}
              <Text style={styles.season}>Winter</Text>
              {' >'}
            </Text>
            <Text style={styles.subtitle}>Campsite</Text>
            <CheckBox
              onClick={() => setChecked(!checked)}
              isChecked={checked}
              rightText={'CheckBox'}
            />
            <CheckBox
              onClick={() => handleChange}
              isChecked={checked}
              rightText={'CheckBox'}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Bear;
