import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: 100,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 50,
  },
  calendarContainer: {
    top: 100,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  calendar: {
    flex: 1,
  },
  text: {
    margin: 70,
    fontSize: 18,
  },
});

export default styles;
