import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')
export default StyleSheet.create({
  container: {},
  text: {
    fontSize: width * 0.027,
    color: '#BCBEC0',
    marginBottom: width * 0.06
  },
  input: {

    fontSize: width * 0.037,
    borderBottomWidth: 1,
    borderColor: '#353535',
    width: '100%',
    marginBottom: width * 0.1296
  }
})
