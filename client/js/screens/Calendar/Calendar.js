import React, {Component} from 'react';
import {View} from 'react-native';
import CText from '../../components/CustomText';
import CalendarPicker from 'react-native-calendar-picker';
import PageLayout from '../../components/PageLayout';
import styles from './styles';

class Calendar extends Component {
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

    let numberOfDays =
      selectedStartDate && selectedEndDate
        ? Math.round(selectedEndDate.diff(selectedStartDate, 'days', true))
        : null;

    let pricePerNight = 25;

    return (
      <PageLayout
        imageSource={require('../../assets/P3_ORC_ImagePool/Leaf.jpeg')}
        onPress={() => {
          navigation.goBack();
        }}
        pageContent={
          <>
            <CalendarPicker
              style={styles.calendar}
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}></CalendarPicker>
            <View>
              <CText>Start Date: {startDate}</CText>
              <CText>End Date: {endDate}</CText>
              <CText>Total Days: {numberOfDays}</CText>
              <CText>Total Price: ${numberOfDays * pricePerNight}</CText>
            </View>
          </>
        }></PageLayout>
    );
  }
}

export default Calendar;
