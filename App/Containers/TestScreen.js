import React, {Component} from 'react'
import { Text, Image, View, ImageBackground} from 'react-native'
import {Images} from '../Themes'
import MyButton from '../Components/MyButton'

import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TestScreenStyle'


class TestScreen extends Component {
  render() {
    return (
      <ImageBackground
         style={{width: '100%', height: '100%'}}

        source={Images.bg} >
        <Text>Inside</Text>
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)
