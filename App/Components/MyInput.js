import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native'
import styles from './Styles/MyInputStyle'

export default class MyInput extends Component {
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
    const {text, placeholder, value, onChangeText, secureTextEntry} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <TextInput style={styles.input}
                   placeholder={placeholder}
                   onChangeText={onChangeText}
                   valur={value}
                   secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }
}
