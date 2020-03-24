import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    height: 200,
  },
  darken: {
    flex: 1,
    backgroundColor: 'rgba(20,50,0,0.2)',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    top: 50,
  },
  paymentModal: {
    top: 100,
    height: 600,
    backgroundColor: 'whitesmoke',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
  },
  text: {
    margin: 70,
    fontSize: 18,
  },
  button: {
    backgroundColor: 'orange',
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
