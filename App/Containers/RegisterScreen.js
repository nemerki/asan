import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import {connect} from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import I18n from '../I18n';
import PhoneInput from 'react-native-phone-input'
import MyInput from '../Components/MyInput';
import MyButton from '../Components/MyButton';


// Styles
import styles from './Styles/RegisterScreenStyle'

const {width} = Dimensions.get('window');

class RegisterScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View>

          <MyInput text={I18n.t('name').toUpperCase()}/>
          <MyInput text={I18n.t('surname')}/>

          <View>
            <Text style={{
              fontSize: width * 0.027,
              color: '#BCBEC0',
              marginBottom: width * 0.06
            }}>{I18n.t('phoneNumber')}</Text>
            <PhoneInput initialCountry='az' style={{
              fontSize: width * 0.037,
              borderBottomWidth: 1,
              borderColor: '#353535',
              width: '100%',
              marginBottom: width * 0.1296
            }} ref={ref => {
              this.phone = ref;
            }}/>
          </View>

          <MyInput secureTextEntry={true} text={I18n.t('password')} />

        </View>
        <View style={styles.buttonContainer}>
          <MyButton onPress={this.onPres}
                    backgroundColor='#451E5D'
                    color='#fff'
                    borderColor='451E5D'
                    text={I18n.t('next')}
          />

        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
