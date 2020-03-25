import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bg: {width: '100%', height: '100%'},

  banner: {
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 15,
    flexDirection: 'row',
  },
  backArrow: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    paddingTop: 10,
    alignSelf: 'center',
    zIndex: 4,
  },
  card: {
    marginTop: 100,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  headerContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: '100%',
  },
  pageContent: {
    paddingTop: 25,
  },
});

export default styles;
