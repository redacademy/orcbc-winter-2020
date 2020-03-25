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
  const checklist = [
    [
      {label: '4-Season Tent', complete: false},
      {label: 'Cold-Weather Sleeping Bag', complete: false},
      {label: 'Insulated Sleeping Pad', complete: false},
      {label: 'Stove and Fuel', complete: false},
      {label: 'Tarps', complete: false},
    ],
    [
      {label: 'Winter Jacket', complete: false},
      {label: 'Hardshell Jacket and Pants', complete: false},
      {label: 'Baselayers', complete: false},
      {label: 'Midlayers', complete: false},
      {label: 'Gloves', complete: false},
      {label: 'Warm Socks', complete: false},
    ],
    [
      {label: 'Backcountry Skis or Snowshoes', complete: false},
      {label: 'Backpack or Sled', complete: false},
      {label: 'Poles', complete: false},
      {label: 'Beacon', complete: false},
      {label: 'Probe', complete: false},
      {label: 'Shovel', complete: false},
    ],
  ];
  const [todo, setTodo] = useState(checklist);

  const handleChange = (index, item) => {
    const updatedChecklist = [...todo];
    updatedChecklist[index][item].complete = !updatedChecklist[index][item]
      .complete;
    setTodo(updatedChecklist);
  };

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
            <Text style={styles.subtitle}>Campsite:</Text>

            {todo[0].map(({label, complete}, key) => (
              <View key={key}>
                <CheckBox
                  onClick={() => handleChange(0, key)}
                  isChecked={complete}
                  rightText={label}
                />
              </View>
            ))}
            <Text style={styles.subtitle}>Clothing:</Text>
            {todo[1].map(({label, complete}, key) => (
              <View key={key}>
                <CheckBox
                  onClick={() => handleChange(1, key)}
                  isChecked={complete}
                  rightText={label}
                />
              </View>
            ))}
            <Text style={styles.subtitle}>
              Winter Travel and Avalanche Safety:
            </Text>
            {todo[2].map(({label, complete}, key) => (
              <View key={key}>
                <CheckBox
                  onClick={() => handleChange(2, key)}
                  isChecked={complete}
                  rightText={label}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Bear;
