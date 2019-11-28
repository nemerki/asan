import {StyleSheet, Dimensions} from 'react-native'
import {ApplicationStyles} from '../../Themes/'

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginHorizontal: width * 0.06,
    marginVertical: width * 0.125,
    flex: 1,
    justifyContent: 'space-between'
  },
})
