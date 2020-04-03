import React from 'react';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';
import styles from './styles';

const MyFaves = props => {
  return (
    <PageLayout
      imageSource={require('../../assets/P3_ORC_ImagePool/pines.jpg')}
      title="My Favourite Places"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'flex'}}
      pageContent={
        <>
          <CText style={styles.tip}>Quick Tips</CText>
        </>
      }
    />
  );
};

export default MyFaves;
