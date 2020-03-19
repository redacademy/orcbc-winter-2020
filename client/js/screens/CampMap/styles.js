import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    paddingLeft: 30,
  },
  search: {
    borderColor: '#e6e6e6',
    borderWidth: 1,
    backgroundColor: 'white',
    width: '90%',
    height: '22%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    position: 'absolute',
    top: '5%',
    width: '100%',
    height: 185,
    zIndex: 1,
  },
});

export default styles;
