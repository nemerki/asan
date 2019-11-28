import {Dimensions, StyleSheet} from 'react-native'
import {ApplicationStyles} from '../../Themes/'
const {height} = Dimensions.get('window')
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  map: {
    ...StyleSheet.absoluteFillObject
  },
  buttonContainer: {
    width:'100%',
    position: 'absolute',
    bottom: height * 0.09
  }
})
