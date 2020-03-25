import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {width: '100%', height: '100%'},

  banner: {
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 15,
    flexDirection: 'row',
  },
  backArrow: {width: 30, height: 30, paddingTop: 2},
  header: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    color: 'white',
    paddingLeft: 93,
  },
  card: {
    marginTop: 25,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '100%',
  },
  tip: {
    fontSize: 20,
    paddingTop: 16,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  content: {padding: 25, color: '#343434'},
  subtitle: {fontSize: 16, fontWeight: '500'},
  text: {
    fontSize: 14,
    paddingVertical: 16,
  },
});

export default styles;
