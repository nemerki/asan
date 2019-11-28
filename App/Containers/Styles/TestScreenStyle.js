import {Dimensions, StyleSheet} from 'react-native'
import {ApplicationStyles} from '../../Themes/'

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  orderContainer: {
    paddingHorizontal: width * 0.06,
    bottom:0,
    position:'absolute',
    paddingBottom: height * 0.04,
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: height * 0.05,

  },
  inputIcon: {
    flex: 1,
    paddingVertical: 5.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputButton: {
    flex: 9,
    justifyContent: 'space-between',
    marginVertical: height * 0.02,
  },
  dash: {
    width: 2,
    height: height * 0.04,
    flexDirection: 'column'
  },
  line: {
    borderBottomColor: '#353535',
    borderBottomWidth: 1,
    marginVertical: 10
  },
  carType:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  carTypeItem:{
    backgroundColor:'#451E5D',
    height:height * 0.09,
    width:height * 0.09,
    borderRadius:7,
    justifyContent: 'center',
  },
  icon: {
    width: width * 0.16 - width * 0.03,
    alignSelf: 'center'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
})
