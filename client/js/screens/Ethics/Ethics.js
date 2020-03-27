import React from 'react';
import CText from '../../components/CustomText';
import PageLayout from '../../components/PageLayout';
import EthicRule from '../../components/EthicRule';
import outdoorEthics from '../../assets/outdoorEthics.json';
import styles from './styles';

const Ethics = ({navigation}) => {
  {
    console.log(outdoorEthics.rules);
  }
  return (
    <PageLayout
      imageSource={require('../../assets/Guide/images/avalanche.png')}
      title="Outdoor Ethics"
      onPress={() => {
        navigation.goBack();
      }}
      arrowDisplay={{display: 'flex'}}
      pageContent={
        <>
          <CText style={styles.title}>Principles of Outdoor Ethics</CText>
          {outdoorEthics.rules.map(rule => (
            <EthicRule
              title={`${rule.id}. ${rule.title}`}
              content={rule.content}
              key={rule.id}
            />
          ))}
        </>
      }
    />
  );
};

export default Ethics;
