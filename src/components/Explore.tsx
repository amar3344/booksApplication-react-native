import { Text, View,StyleSheet,Image } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'


export class Explore extends Component {
  render() {
    return (
      <View style={styles.exploreCont}>
        <Text style={styles.textExplore}>Explore</Text>
        <View>
          <FeatherIcon name='search' style={styles.searchIcon}/>
          <TextInput placeholder='Title,author or keyword'/>
        </View>
        <View>
          <Text>Topics</Text>
          <Text>Personal growth</Text>
          <Text>Cultute 7 Society</Text>
          <Text>Fiction</Text>
          <Text>Mind $ Philodophy</Text>
        </View>
        <View>
          <Text>Fiction</Text>
          <Text>Show all</Text>
        </View>
        <View>
          <View>
              <Image source={require('../assets/homeimg/goodguy.png')}/>
              <View>
                <Text>The Good guy</Text>
                <Text>Mark mcalister</Text>
              <View>
                      <FeatherIcon name="headphones"/>
                      <Text>5m</Text>
                  </View>
                  <View>
                      <Ionicons name="ios-glasses"/>
                      <Text>8m</Text>
                  </View>
                  <View>
                  </View>
              </View>
            </View>
        </View>
      </View>
    )
  }
}

export default Explore

const styles = StyleSheet.create({

  searchIcon:{
    width:30,
    height:30,
  },

  exploreCont:{
    flex:1,
    backgroundColor:'#000',
  },

  textExplore:{
    color:'#fff',
    fontSize:30,
    fontWeight:'800',
    fontFamily:'Goutham',
  }

})