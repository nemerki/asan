import React, {Component} from 'react'
import {TextInput, Text, Dimensions, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/OrderScreenStyle'
import MapView from "react-native-maps";
import {Images} from "../Themes";
import MapViewDirections from "react-native-maps-directions";
import MyButton from "../Components/MyButton";
import I18n from "../I18n";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Dash from "react-native-dash";


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCMfIpRhn8QaGkYQ0I5KPWvFT1kLbA-DAM';


class OrderScreen extends Component {

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
              <Text style={{textAlign: 'center'}}>Ekonom</Text>
              <Text>4.60 AZN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.carTypeItem}>
                <View style={styles.imageContainer}>
                  <Image resizeMode={'contain'} style={styles.icon} source={Images.comfortIcon}/>
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>Ekonom</Text>
              <Text>4.60 AZN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.carTypeItem}>
                <View style={styles.imageContainer}>
                  <Image resizeMode={'contain'} style={styles.icon} source={Images.vipIcon}/>
                </View>
              </View>
              <Text style={{textAlign: 'center'}}>Ekonom</Text>
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

          <TextInput style={{
            borderColor: '#451E5D',
            borderWidth: 1,
            borderRadius: 10,
            paddingVertical: width * 0.0277,
            paddingHorizontal: width * 0.0277,
            marginTop:15,
            display:'none'

          }}
                     placeholder="Type your name here"
                     onChangeText={this.handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen)
