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

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class Slide extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          id: 1,
          title: 'Joffre Lakes',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://www.vancouvertrails.com/images/hikes/joffre-lakes.jpg',
        },
        {
          id: 2,
          title: 'Golden Ears West Canyon Trail',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://www.vancouvertrails.com/images/photos/golden-ears-2.jpg',
        },
        {
          id: 3,
          title: 'Nairn Falls',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://lh3.googleusercontent.com/proxy/ArISGshsuAWxmKhcaQEFWO_l-Cp-TbjFLTPkIJMdik98rXj0lhITYinpfhviWSHdDnWVyjy-12WKRFjNe3hRo2TvnA6FV6cIzbkF9p8GL-mOe0W5adLl_yn5VW8L38x_CItkpJFgk4xtHt8',
        },
        {
          id: 4,
          title: 'Garibaldi Provincial Park',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://i1.wp.com/www.reneeroaming.com/wp-content/uploads/2019/08/Garibaldi-Provincial-Park-Panorama-Ridge-Overnight-Backpacking-Trip-Sunset-BANNER-1.jpg?fit=2000%2C1125&ssl=1',
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <View
        style={{
          padding: 16,
          marginTop: 22,
          marginLeft: 15,
          marginRight: 2,
          height: '80%',
          width: Dimensions.get('screen').width * 0.9,
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Image
          source={{uri: item.illustration}}
          style={{
            ...StyleSheet.absoluteFillObject,
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            display: 'flex',
            color: 'white',
            fontSize: 24,
            fontWeight: '400',
          }}>
          {item.title}
          {'\n'}
          <Text style={{fontSize: 16}}>{item.subtitle}</Text>
        </Text>
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
