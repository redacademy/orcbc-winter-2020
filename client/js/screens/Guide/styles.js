import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  emergency: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    alignContent: 'center',
    marginTop: 20,
    borderRadius: 10,
    height: 200,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    paddingTop: 10,
  },
  siren: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
  emergTitle: {
    fontSize: 24,
    justifyContent: 'center',
  },
  subheader: {
    fontWeight: '500',
    padding: 10,
  },
  guides: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    width: 150,
    margin: 10,
    height: 150,
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  smallIcon: {
    height: 60,
    width: 60,
    marginBottom: 20,
    alignSelf: 'center',
  },
  smallIconWide: {
    height: 60,
    width: 70,
    marginBottom: 20,
    alignSelf: 'center',
  },
  smallIconBear: {
    height: 50,
    width: 90,
    marginBottom: 30,
    alignSelf: 'center',
  },
  smallIconTall: {
    height: 60,
    width: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  guideButton: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    height: 30,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
});

export default styles;
