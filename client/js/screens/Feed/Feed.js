import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import PageLayout from '../../components/PageLayout';
import CText from '../../components/CustomText';

const Feed = props => {
  const {navigation} = props;
  return (
    <PageLayout
      imageSource={require('../../assets/P3_ORC_ImagePool/hikingpeople.jpg')}
      title="Community"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'none'}}
      pageContent={
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Post');
          }}>
          <CText>Post a Review</CText>
        </TouchableHighlight>
      }></PageLayout>
  );
};

export default Feed;
