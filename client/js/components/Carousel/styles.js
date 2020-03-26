import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 22,
    marginLeft: 15,
    marginRight: 2,
    height: '80%',
    width: Dimensions.get('screen').width * 0.9,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  title: {
    display: 'flex',
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  subtitle: {fontSize: 16},
  button: {
    height: 30,
    width: 92,
    borderRadius: 7,
    backgroundColor: '#F5AF15',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
  star: {
    height: 20,
    width: 20,
  },
  faveButton: {position: 'absolute', top: 15, left: 15},
});

export default styles;
