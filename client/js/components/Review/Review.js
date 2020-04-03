import React from 'react';
import CText from '../../components/CustomText';
import {View, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.userHeader}>
          <Image
            source={{
              uri:
                'https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png',
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <CText style={styles.userName}>{this.props.name}</CText>
            <CText style={styles.location}>{this.props.park}</CText>
          </View>
        </View>
        <Image
          source={{
            uri:
              'https://images.dailyhive.com/20200320165546/shutterstock_2903636871.jpg',
          }}
          style={styles.image}
        />
        <CText style={styles.comment}>{this.props.comment}</CText>
        <View style={styles.icons}>
          <Icon
            style={styles.icon}
            name="thumb-up-outline"
            size={18}
            color="grey"
          />
          <Icon name="share-variant" size={18} color="grey" />
        </View>
      </View>
    );
  }
}

export default Review;
