import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from 'react'
import Home from "./Home";
import Explore from "./Explore";
import Library from "./Library";
import HomeIcon from 'react-native-vector-icons/AntDesign';
import Search from "react-native-vector-icons/EvilIcons"
import LibraryIcon from "react-native-vector-icons/Ionicons"


interface IProps{
    navigation:{
        navigate:any
    }
}


const Tab = createBottomTabNavigator()

export class BottomNavigation extends Component<IProps> {
  render() {
    return (
      <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor:'black'
      }}>
        <Tab.Screen options={{
          tabBarLabel: 'Home',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <HomeIcon name="home" color={'#000'} size={20} />
          ),
        }} name="Home" component={Home}/>
        <Tab.Screen options={{
          tabBarLabel: 'explore',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Search name="search" color={'#000'} size={20} />
          ),
        }} name="Explore" component={Explore}/>
        <Tab.Screen options={{
          tabBarLabel: 'library',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <LibraryIcon name="library-outline" color={'#000'} size={20} />
          ),
        }} name="Library" component={Library}/>
      </Tab.Navigator>
    )
  }
}

export default BottomNavigation