import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'grey',
    margin: 15,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    width: '90%',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey',
  },
  userHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userInfo: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  userName: {
    fontWeight: '500',
    fontSize: 16,
  },
  location: {
    color: 'grey',
  },
  comment: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 320,
    height: 120,
    alignSelf: 'center',
    marginTop: 10,
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;
