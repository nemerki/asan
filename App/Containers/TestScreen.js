import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Dash from "react-native-dash";
import MyButton from '../Components/MyButton';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/TestScreenStyle'
import {Images} from "../Themes";

class TestScreen extends Component {
  render() {
    return (
      <View style={styles.orderContainer}>
        <View style={styles.addressContainer}>
          <View style={styles.inputIcon}>
            <Icon name="compass" size={30} color="#27093D"/>
            <Dash style={styles.dash}/>
            <Icon name="location-pin" size={30} color="#27093D"/>
          </View>
          <View style={styles.inputButton}>
            <Text>Füzuli küçəsi 14</Text>
            <Text>Füzuli küçəsi 14</Text>
          </View>
        </View>

        <View
          style={styles.line}
        />
        <View style={styles.carType}>
          <TouchableOpacity>
            <View style={styles.carTypeItem}>
              <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} style={styles.icon} source={Images.ekonomIcon}/>
              </View>
            </View>
            <Text style={{textAlign:'center'}}>Ekonom</Text>
            <Text>4.60 AZN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.carTypeItem}>
              <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} style={styles.icon} source={Images.comfortIcon}/>
              </View>
            </View>
            <Text style={{textAlign:'center'}}>Ekonom</Text>
            <Text>4.60 AZN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.carTypeItem}>
              <View style={styles.imageContainer}>
                <Image resizeMode={'contain'} style={styles.icon} source={Images.vipIcon}/>
              </View>
            </View>
            <Text style={{textAlign:'center'}}>Ekonom</Text>
            <Text>4.60 AZN</Text>
          </TouchableOpacity>
        </View>

        <View
          style={styles.line}
        />

        <View style={styles.buttonContainer}>
          <MyButton color='#fff'
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                    backgroundColor='#34C57A'
                    borderColor='#34C57A'
                    text='Sifariş ET'
                    width='48%'/>
          <MyButton width='47%'
                    onPress={() => this.props.navigation.navigate('RegisterScreen')}
                    backgroundColor='#451E5D'
                    color='#fff'
                    borderColor='#451E5D'
                    text='Başqası Üçün'/>
        </View>

      </View>
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
