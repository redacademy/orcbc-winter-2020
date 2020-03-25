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
  },
  inputTitle: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 25,
  },
  input: {
    justifyContent: 'flex-start',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    margin: 25,
  },
  button: {
    borderWidth: 5,
    borderColor: 'grey',
  },
});

export default styles;
