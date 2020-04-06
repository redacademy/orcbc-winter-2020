import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 40,
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    margin: 15,
    color: 'white',
    width: 300,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    width: 100,
    alignSelf: 'center',
    margin: 50,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    padding: 10,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
  },
  signupTextBold: {
    fontWeight: 'bold',
  },
});

export default styles;
