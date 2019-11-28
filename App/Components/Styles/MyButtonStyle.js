import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')
export default StyleSheet.create({
  container: {

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginHorizontal: width * 0.0137,
    paddingVertical: width * 0.0277,

  },
  text: {
    fontSize: width * 0.045,

  }
})
