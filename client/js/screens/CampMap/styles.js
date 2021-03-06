import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  map: {
    height: '100%',
    width: '100%',
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
    top: '10%',
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
  carousel: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 175,
    bottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: 'rgba(249, 249, 249, 0.65)',
    flex: 1,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 4,
    },
  },
});

export default styles;
