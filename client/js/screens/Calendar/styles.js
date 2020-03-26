import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darken: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.2)',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 50,
  },
  calendar: {
    top: 80,
    height: 700,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  text: {
    margin: 70,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'rgb(242,160,6)',
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
