import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import CText from '../../components/CustomText';
import CalendarPicker from 'react-native-calendar-picker';
import styles from './styles';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date().setDate(new Date().getDate() + 180); // 180 days from today
    const startDate = selectedStartDate
      ? selectedStartDate.format('LL').toString()
      : '';
    const endDate = selectedEndDate
      ? selectedEndDate.format('LL').toString()
      : '';

    return (
      <ImageBackground
        style={styles.background}
        source={require('../../assets/P3_ORC_ImagePool/Leaf.jpeg')}>
        <View style={styles.calendarContainer}>
          <CalendarPicker
            style={styles.calendar}
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            todayBackgroundColor="#f2e6ff"
            selectedDayColor="#7300e6"
            selectedDayTextColor="#FFFFFF"
            onDateChange={this.onDateChange}>
            <View>
              <CText>Start Date: {startDate}</CText>
              <CText>End Date: {endDate}</CText>
            </View>
          </CalendarPicker>
        </View>
      </ImageBackground>
    );
  }
}
