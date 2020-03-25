import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import styles from './styles';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 10;
export default class Slide extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          id: 1,
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/UYiroysl.jpg',
        },
        {
          id: 2,
          title: 'Earlier this morning, NYC',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
        },
        {
          id: 3,
          title: 'White Pocket Sunset',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        },
        {
          id: 4,
          title: 'Acrocorinth, Greece',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <View
        style={{
          padding: 16,
          marginLeft: 15,
          marginRight: 2,
          height: '80%',
          width: Dimensions.get('screen').width * 0.9,
        }}>
        <Image
          source={{uri: item.illustration}}
          style={{
            ...StyleSheet.absoluteFillObject,
            borderTopLeftRadius: entryBorderRadius,
            borderTopRightRadius: entryBorderRadius,
          }}
        />
        <Text>{item.title}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.entries}
        renderItem={this._renderItem}
        horizontal={true}
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
