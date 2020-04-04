import React from 'react';
import {TouchableHighlight, View} from 'react-native';
import PageLayout from '../../components/PageLayout';
import CText from '../../components/CustomText';
import Review from '../../components/Review';
import styles from './styles';
const Feed = props => {
  const {navigation, reviews} = props;
  return (
    <PageLayout
      imageSource={require('../../assets/P3_ORC_ImagePool/hikingpeople.jpg')}
      title="Community"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'none'}}
      pageContent={
        <>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate('Post');
            }}>
            <CText style={styles.post}>Post a Review</CText>
          </TouchableHighlight>
          {reviews.map(review => (
            <Review
              name={review.author.name}
              park={review.site.campname}
              comment={review.comment}
            />
          ))}
        </>
      }></PageLayout>
  );
};

export default Feed;
