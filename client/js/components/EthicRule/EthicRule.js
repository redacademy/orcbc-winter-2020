import React from 'react';
import {View, TouchableHighlight, Easing, Animated, Image} from 'react-native';
import CText from '../../components/CustomText';
import styles from './styles';

export default class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.state = {open: false};
  }

  animate = () => {
    this.spinValue.setValue(0);
    const createAnimation = (value, duration, easing) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
      });
    };
    createAnimation(this.spinValue, 500, Easing.linear).start();
  };

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <>
        <TouchableHighlight
          onPress={() => {
            this.setState({open: !this.state.open});
            this.animate();
          }}>
          <View style={styles.ruleTitleContainer}>
            <CText style={styles.ruleTitle}>{this.props.title}</CText>
            <Animated.View style={{transform: [{rotate: spin}]}}>
              {!this.state.open ? (
                <Image
                  style={styles.chevron}
                  source={require('../../assets/Guide/images/chevron-up.png')}
                />
              ) : (
                <Image
                  style={styles.chevron}
                  source={require('../../assets/Guide/images/chevron-down.png')}
                />
              )}
            </Animated.View>
          </View>
        </TouchableHighlight>
        {this.state.open ? (
          <View>
            <CText style={styles.ruleContent}>{this.props.content}</CText>
          </View>
        ) : null}
      </>
    );
  }
}
