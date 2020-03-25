import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  clickable: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
    borderRadius: 10,
    height: 180,
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  text: {
    shadowOffset: {width: 0, height: 0},
    paddingTop: 15,
    fontSize: 16,
    textShadowColor: '#fff',
    fontWeight: '500',
  },
  icon: {
    height: 70,
    width: 80,
    marginTop: 30,
  },
  avalanche: {
    height: 90,
    width: 90,
    marginTop: 20,
  },
});
export default styles;
