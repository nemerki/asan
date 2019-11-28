import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import DestinationAddressScreen from '../Containers/DestinationAddressScreen'
import PlaceScreen from '../Containers/PlaceScreen'
import RouteScreen from '../Containers/RouteScreen'
import MapScreen from '../Containers/MapScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import OrderScreen from '../Containers/OrderScreen'
import TestScreen from '../Containers/TestScreen'
import I18n from '../I18n'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  TestScreen: {
    screen: TestScreen,
    navigationOptions: {
      header: null,
    }
  },
  OrderScreen: {
    screen: OrderScreen,
    navigationOptions: {
      header: null,
    }
  },
  RouteScreen: {
    // eslint-disable-next-line no-undef
    screen: RouteScreen,
    navigationOptions: {
      header: null,
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: I18n.t('login'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }
  },
  DestinationAddressScreen: {
    screen: DestinationAddressScreen,
    navigationOptions: {
      title: I18n.t('gedilecekUnvan'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }
  },
  PlaceScreen: {screen: PlaceScreen},
  MapScreen: {screen: MapScreen, navigationOptions: {header: null}},
  LaunchScreen: {screen: LaunchScreen}
}, {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
export default createAppContainer(PrimaryNav)
