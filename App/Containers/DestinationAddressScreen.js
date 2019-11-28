import React, {Component} from 'react'
import {ScrollView, View, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import I18n from '../I18n'
import MyButton from '../Components/MyButton'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Dash from 'react-native-dash';

// Add Actions - replace 'Your' with whatever your reducer is called :)
import DestinationAddressAction from '../Redux/DestinationAddressRedux'

// Styles
import styles from './Styles/DestinationAddressScreenStyle'
import RNGooglePlaces from "react-native-google-places";


class DestinationAddressScreen extends Component {

  state = {
    startLocation: '',
    endLocation: '',
    startLongLat: [],
    endLongLat: []
  }

  componentDidMount() {
    this.setState({
      startLocation: I18n.t('baslangicNoqtesi'),
      endLocation: I18n.t('bitisNoqtesi'),
    });

  }

  openSearchModal(type) {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
        if (type === 'start') {
          this.setState({
            startLocation: place.name,
            startLongLat: [place.location.latitude, place.location.longitude]
          });
        } else if (type === 'end') {
          this.setState({
            endLocation: place.name,
            endLongLat: [place.location.latitude, place.location.longitude]
          });
        }


      })
      .catch(error => console.log(error.message));  // error is a Javascript Error object
  }


  onPres = () => {
    const {startLongLat, endLongLat} = this.state;
    this.props.attemptDestinationAddress(startLongLat, endLongLat)
    this.props.navigation.navigate('RouteScreen')

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}>
                <Icon name="compass" size={30} color="#27093D"/>
                <Dash style={styles.dash}/>
                <Icon name="location-pin" size={30} color="#27093D"/>
              </View>
              <View style={styles.inputButton}>

                <MyButton onPress={() => this.openSearchModal('start')}
                          backgroundColor='#fff'
                          color='#606060'
                          borderColor='#451E5D'
                          text={this.state.startLocation}
                />

                <MyButton onPress={() => this.openSearchModal('end')}
                          backgroundColor='#fff'
                          color='#606060'
                          borderColor='#451E5D'
                          text={this.state.endLocation}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>

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
    startLongLat: state.destinationAddress.startLongLat,
    endLongLat: state.destinationAddress.endLongLat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptDestinationAddress: (startLongLat, endLongLat) => dispatch(DestinationAddressAction.destinationAddressRequest(startLongLat, endLongLat))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DestinationAddressScreen)
