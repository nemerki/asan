import {Dimensions, StyleSheet} from 'react-native'
import {ApplicationStyles} from '../../Themes/'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bg: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
