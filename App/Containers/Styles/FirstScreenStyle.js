import {StyleSheet, Dimensions} from 'react-native'
// import {Metrics, ApplicationStyles} from '../../Themes/'

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
  bg: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {

    width: width * 0.436,
    height: height * 0.20,
    alignItems: 'center'
  },
  image: {

    top: height / 2 - height * 0.20

  },
  whiteArea: {
    position: 'absolute',
    backgroundColor: 'white',
    width: width * 2,
    height: width,
    top: height - height * 0.27,
    right: -width * 0.1,
    borderTopRightRadius: width * 3

  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    bottom: height * 0.039,
    justifyContent: 'space-between',
    marginHorizontal: width * 0.064
  },
  textContainer: {
    position: 'absolute',
    bottom: height * 0.1435,
    left: 0,
    marginHorizontal: width * 0.064
  },
  text: {
    fontSize: width * 0.045
  }
})
