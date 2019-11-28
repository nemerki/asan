import React, {Component} from 'react'
import {ScrollView, Text, Dimensions, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import {Images} from '../Themes'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RouteScreenStyle'
import MapView from "react-native-maps";
import MyButton from "../Components/MyButton";
import I18n from "../I18n";


import MapViewDirections from 'react-native-maps-directions';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCMfIpRhn8QaGkYQ0I5KPWvFT1kLbA-DAM';


class RouteScreen extends Component {


  componentDidMount() {
    const {startLongLat, endLongLat} = this.props;

    this.setState({
      region: {
        latitude: startLongLat[0],
        longitude: startLongLat[1],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922 * ASPECT_RATIO
      },
      coordinates: [
        {
          latitude: startLongLat[0],
          longitude: startLongLat[1],
        },
        {
          latitude: endLongLat[0],
          longitude: endLongLat[1],
        },
      ]
    });

  }

  constructor(props) {
    super(props);

    // AirBnB's Office, and Apple Park
    this.state = {
      coordinates: [
        {
          latitude: 37.3317876,
          longitude: -122.0054812,
        },
        {
          latitude: 37.771707,
          longitude: -122.4053769,
        },
      ],
      region: {
        latitude: 37.771707,
        longitude: -122.4053769,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };

    this.mapView = null;
  }

  onMapPress = (e) => {
    this.setState({
      coordinates: [
        ...this.state.coordinates,
        e.nativeEvent.coordinate,
      ],
    });
  }


  render() {

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.latitudeDelta,
          }}
          style={StyleSheet.absoluteFill}
          ref={c => this.mapView = c}
          // onPress={this.onMapPress}
        >

          {this.state.coordinates.map((coordinate, index) =>
            <MapView.Marker key={`coordinate_${index}`} image={Images.marker} coordinate={coordinate}/>
          )}
          {(this.state.coordinates.length >= 2) && (
            <MapViewDirections
              origin={this.state.coordinates[0]}
              waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
              destination={this.state.coordinates[this.state.coordinates.length - 1]}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="#451E5D"
              optimizeWaypoints={true}
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={result => {
                console.log('Distance: ${result.distance} km')
                console.log('Duration: ${result.duration} min.')

                this.mapView.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: (width / 20),
                    bottom: (height / 20),
                    left: (width / 20),
                    top: (height / 20),
                  }
                });
              }}
              onError={(errorMessage) => {
                // console.log('GOT AN ERROR');
              }}
            />
          )}
        </MapView>
        <View style={styles.buttonContainer}>

          <MyButton
            onPress={() => this.props.navigation.navigate('OrderScreen')}
            backgroundColor='#451E5D'
            color='#fff'
            borderColor='#451E5D'
            text={I18n.t('teyinEt')}
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen)
