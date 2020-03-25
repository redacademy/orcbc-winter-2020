import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {width: '100%', height: '100%'},

  banner: {
    marginTop: 35,
    marginBottom: 10,
    flexDirection: 'row',
  },
  backArrow: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  header: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    color: 'white',
    alignSelf: 'center',
    paddingLeft: 65,
  },
  card: {
    marginTop: 25,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '100%',
  },

  content: {padding: 25, color: '#343434'},
  season: {
    fontWeight: '500',
  },
  seasonToggle: {
    alignSelf: 'center',
    fontSize: 20,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#343434',
    paddingVertical: 16,
  },
  text: {
    fontSize: 14,
    paddingVertical: 16,
  },
});

export default styles;
