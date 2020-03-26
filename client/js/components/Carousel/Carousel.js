import React, {Component} from 'react';
import {View, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import CText from '../CustomText';

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
          title: 'Golden Ears W. Canyon',
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
      <View style={styles.container}>
        <Image source={{uri: item.illustration}} style={styles.image} />
        <CText style={styles.title}>
          {item.title}
          {'\n'}
          <CText style={styles.subtitle}>{item.subtitle}</CText>
        </CText>

        <TouchableOpacity style={styles.button}>
          <CText style={styles.buttonText}>Direction</CText>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.entries}
        renderItem={this._renderItem}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
