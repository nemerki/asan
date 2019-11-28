import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native'
import styles from './Styles/MyButtonStyle'

export default class MyButton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const {text, onPress, color, backgroundColor, width, borderColor} = this.props
    return (
      <TouchableOpacity
        style={[styles.container, {backgroundColor: backgroundColor, width: width, borderColor: borderColor}]}
        onPress={onPress}>
        <Text style={[styles.text, {color: color}]}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
