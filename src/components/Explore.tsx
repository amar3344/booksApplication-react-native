import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import SearchIcon from 'react-native-vector-icons/Feather'

export class Explore extends Component {
  render() {
    return (
      <View style={styles.exploreCont}>
        <Text style={styles.textExplore}>Explore</Text>
        <View>
          <SearchIcon name='search' style={styles.searchIcon}/>
          <TextInput placeholder='Title,author or keyword'/>
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
    fontSIze:30,
    fontWeight:'800',
    fontFamily:'Goutham',
  }

})