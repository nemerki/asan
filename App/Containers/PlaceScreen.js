import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import RNGooglePlaces from 'react-native-google-places';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PlaceScreenStyle'

class PlaceScreen extends Component {

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
      })
      .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openSearchModal()}
        >
          <Text>Pick a Place</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaceScreen)
