import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import PasswordPage from './src/components/PasswordPage'
import ForgotPage from './src/components/ForgotPage'
import SignUpPage from './src/components/SignUpPage'
import LoginPage from './src/components/LoginPage'
import VerifyCode from './src/components/VerifyCode';
import BottomNavigation from './src/components/BottomNavigation';
import DrawerNaviogation from './src/components/DrawerNaviogation';

const Stack = createStackNavigator()


export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown:false}}/>
          <Stack.Screen name='PasswordPage' component={PasswordPage} options={{headerShown:false}}/>
          <Stack.Screen name="SignUpPage" component={SignUpPage} options={{headerShown:false}}/>
          <Stack.Screen name="ForgotPage" component={ForgotPage} options={{headerShown:false}}/>
          <Stack.Screen name="VerifyCode" component={VerifyCode} options={{headerShown:false}}/>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{headerShown:false}}/>
          <Stack.Screen name="DrawerNaviogation" component={DrawerNaviogation} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App