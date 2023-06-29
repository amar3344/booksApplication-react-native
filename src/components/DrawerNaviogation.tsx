import React, { Component } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './Home';
import Explore from './Explore';
import Library from './Library';


interface IProps{
  navigation:{
    navigator:any
  }
}

const Drawer = createBottomTabNavigator()


export class DrawerNaviogation extends Component<IProps> {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Explore" component={Explore}/>
        <Drawer.Screen name="Library" component={Library}/>
      </Drawer.Navigator>
    )
  }
}

export default DrawerNaviogation