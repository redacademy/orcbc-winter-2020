import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

const Feed = props => {
  const {navigation} = props;
  return (
    <>
      <Text>Feed</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Post');
        }}>
        <Text>Post a Review</Text>
      </TouchableHighlight>
    </>
  );
};

export default Feed;
