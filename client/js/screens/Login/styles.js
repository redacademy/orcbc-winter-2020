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
  },
  inputTitle: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    margin: 15,
    width: '60%',
  },
  button: {
    borderWidth: 5,
    borderColor: 'grey',
  },
});

export default styles;
