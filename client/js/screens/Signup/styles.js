import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginLeft: 100,
    marginBottom: 40,
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  inputTitle: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 25,
    color: 'white',
    fontWeight: '400',
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    margin: 25,
    color: 'white',
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    width: 100,
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    padding: 10,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
