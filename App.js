import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Splash from './screens/Splash'

import SignUpScreen from './screens/SignUpScreen';
import { AppTabNavigator } from './components/AppTabNavigator'
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Drawer: {screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
  SignUp: {screen: SignUpScreen},
  'Splash' : {screen : Splash},
  },
  {
  initialRouteName : 'Splash' 
})

const AppContainer =  createAppContainer(switchNavigator);
