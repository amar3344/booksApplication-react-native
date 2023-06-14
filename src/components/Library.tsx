import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class Library extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textLibrary}>Library</Text>
      </View>
    )
  }
}

export default Library

const styles = StyleSheet.create({

  textLibrary:{
    color:'#000',
    fontSIze:30,
    fontWeight:'500',
    fontFamily:'Goutham',
    textAlign:'center',
  }

})