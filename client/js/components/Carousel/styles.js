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
});

export default styles;
