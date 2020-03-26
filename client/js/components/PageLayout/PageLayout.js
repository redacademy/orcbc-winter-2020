import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import CText from '../../components/CustomText';
import styles from './styles';

const PageLayout = ({
  imageSource,
  title,
  onPress,
  arrowDisplay,
  pageContent,
}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={imageSource} style={styles.bg}>
        <View style={styles.headerContainer}>
          <View style={styles.banner}>
            <View style={arrowDisplay}>
              <TouchableHighlight onPress={onPress}>
                <Image
                  style={styles.backArrow}
                  source={require('../../assets/Guide/images/ios-arrow.png')}
                />
              </TouchableHighlight>
            </View>
          </View>
          <CText style={styles.header}>{title}</CText>
        </View>
        <ScrollView style={styles.card}>
          <View style={styles.pageContent}>{pageContent}</View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PageLayout;
