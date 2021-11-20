// Multiple Screen with react navigation
// To install dependency of react naviagation Run command npm install react-navigation or npm install react-native-screens if first dosent work


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
      title: "My App"
    }
  }
)


export default createAppContainer(navigator)
