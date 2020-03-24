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
    {label: '4-Season Tent', complete: false},
    {label: 'Cold-Weather Sleeping Bag', complete: false},
    {label: 'Insulated Sleeping Pad', complete: false},
    {label: 'Stove and Fuel', complete: false},
    {label: 'Tarps', complete: false},
  ];
  const [todo, setTodo] = useState(checklist);

  const handleChange = task => {
    const checklistCopy = [...todo];
    checklistCopy[task].complete = !checklistCopy[task].complete;
    setTodo(checklistCopy);
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
            <Text style={styles.subtitle}>Campsite</Text>

            {todo.map(({label, complete}, i) => (
              <View key={i}>
                <CheckBox
                  onClick={() => handleChange(i)}
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
