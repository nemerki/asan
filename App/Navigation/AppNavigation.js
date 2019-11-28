import {createStackNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import DestinationAddressScreen from '../Containers/DestinationAddressScreen'
import PlaceScreen from '../Containers/PlaceScreen'
import RouteScreen from '../Containers/RouteScreen'
import MapScreen from '../Containers/MapScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import OrderScreen from '../Containers/OrderScreen'
import TestScreen from '../Containers/TestScreen'
import FirstScreen from '../Containers/FirstScreen'
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
  FirstScreen: {
    screen: FirstScreen,
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
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: I18n.t('register'),
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
  initialRouteName: 'FirstScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})
export default createAppContainer(PrimaryNav)
