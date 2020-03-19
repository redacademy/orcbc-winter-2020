import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    paddingLeft: 40,
    color: '#979797',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    fontWeight: '300',
  },
  search: {
    borderColor: '#c0c0c0',
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
    height: 200,
    zIndex: 1,
    opacity: 0.75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default styles;
