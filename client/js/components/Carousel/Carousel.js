import React, {Component} from 'react';
import {View, Image, FlatList, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';
import CText from '../CustomText';

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [
        {
          id: 1,
          lat: 50.3413367,
          lng: -122.4762104,
          title: 'Joffre Lakes',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://www.vancouvertrails.com/images/hikes/joffre-lakes.jpg',
          fave: false,
        },
        {
          id: 2,
          lat: 49.2460216,
          lng: -122.5433131,
          title: 'Golden Ears W. Canyon',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://www.vancouvertrails.com/images/photos/golden-ears-2.jpg',
          fave: false,
        },
        {
          id: 3,
          lat: 50.2895123,
          lng: -122.833536,
          title: 'Nairn Falls',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://media-cdn.tripadvisor.com/media/photo-s/13/f6/11/d0/nairn-falls.jpg',
          fave: false,
        },
        {
          id: 4,
          lat: 49.94317940000001,
          lng: -123.0546256,
          title: 'Garibaldi Provincial Park',
          subtitle: 'Hiking | Trail',
          illustration:
            'https://i1.wp.com/www.reneeroaming.com/wp-content/uploads/2019/08/Garibaldi-Provincial-Park-Panorama-Ridge-Overnight-Backpacking-Trip-Sunset-BANNER-1.jpg?fit=2000%2C1125&ssl=1',
          fave: false,
        },
      ],
    };
  }

  _renderItem({item}) {
    return (
      <View style={styles.container}>
        <Image source={{uri: item.illustration}} style={styles.image} />
        <TouchableOpacity
          style={styles.faveButton}
          onPress={() => this.setState(prevState => ({fave: !prevState.fave}))}>
          {this.state.fave ? (
            <Image
              source={require('../../assets/icons/favActivated2.png')}
              style={styles.star}
            />
          ) : (
            <Image
              source={require('../../assets/icons/fav2.png')}
              style={styles.star}
            />
          )}
        </TouchableOpacity>
        <CText style={styles.title}>
          {item.title}
          {'\n'}
          <CText style={styles.subtitle}>{item.subtitle}</CText>
        </CText>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Linking.openURL(
              `maps://app?saddr=${this.props.lat}+${this.props.lng}&daddr=${item.lat}+${item.lng}`,
            )
          }>
          <CText style={styles.buttonText}>Direction</CText>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {lat, lng} = this.props;
    return (
      <FlatList
        lat={lat}
        lng={lng}
        data={this.state.entries}
        renderItem={this._renderItem.bind(this)}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
