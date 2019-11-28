import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    marginHorizontal: width * 0.06,
    marginVertical: width * 0.125,
    flex: 1,
    justifyContent: 'space-between'
  },
  forgotPasswordText: {
    color: '#BCBEC0',
    fontSize: width * 0.027,
    marginTop: width * 0.027,
    alignSelf: 'center'
  }
})
