import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ruleTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  ruleTitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  ruleContent: {
    width: '85%',
    alignSelf: 'center',
    fontSize: 14,
  },
  chevron: {
    height: 30,
    width: 30,
  },
});

export default styles;
