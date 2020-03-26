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
    letterSpacing: 1.1,
  },
  paymentModal: {
    display: 'flex',
    top: 100,
    height: 600,
    backgroundColor: 'whitesmoke',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 10,
  },
  text: {
    color: 'rgb(74, 74, 74)',
    textAlign: 'left',
    margin: 10,
    fontSize: 16,
    letterSpacing: 1.1,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    width: '80%',
    margin: 6,
    paddingBottom: 5,
    fontSize: 16,
    color: 'rgb(74, 74, 74)',
    letterSpacing: 1.1,
  },
  button: {
    backgroundColor: 'rgb(242,160,6)',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    width: 'auto',
    alignSelf: 'flex-end',
  },
  btnText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
