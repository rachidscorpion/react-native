// Multiple Screen with react navigation and application structure like header footer or ham-menu

    // 1. Install React Navigation
    // npm install react-navigation
    // or
    // yarn add react-navigation

    // 2. Install Dependencies
    // expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

    // 3. Install React Navigation Stack
    // npm install react-navigation-stack @react-native-community/masked-view
    // or
    // yarn add react-navigation-stack @react-native-community/masked-view

    // 4. Start the app and clear cache with expo r -c


import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "My App",
       headerStyle: {
      backgroundColor: '#222222',
    },
    headerTitleStyle: {
     color: 'white'
    }
  }
)


export default createAppContainer(navigator)
