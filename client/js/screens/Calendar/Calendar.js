import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CText from '../../components/CustomText';
import {CalendarList, Calendar} from 'react-native-calendars';
import styles from './styles';
export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: undefined,
    };
  }

  onDayPress = day => {
    this.setState({selected: day.dateString});
  };

  getDateSelection = () => {
    const selection = {};
    day.forEach(item => {});
  };

  render() {
    return (
      <SafeAreaView>
        <ImageBackground
          style={styles.background}
          source={require('../../assets/Guide/images/Leaf.jpeg')}>
          <CText style={styles.headerTitle}></CText>
          <CalendarList
            style={styles.calendar}
            minDate={new Date()}
            pastScrollRange={0}
            futureScrollRange={3}
            scrollEnabled={true}
            showScrollIndicator={true}
            hideExtraDays
            onDayPress={this.onDayPress}
            onSecondDayPress={this.onSecondDayPress}
            markedDates={{
              [this.state.selected]: {
                startingDay: true,
                color: 'lightgreen',
              },
            }}
            markingType={'period'}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
