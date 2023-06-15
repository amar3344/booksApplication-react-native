import { Text, View,StyleSheet,Image,ScrollView } from 'react-native'
import React, { Component } from 'react'

export class Library extends Component {
  render() {
    return (
      <View>
        <Text>My Library</Text>
        <View>
          <ScrollView>
            <View>
              <Text>Saved Books</Text>
            </View>
            <View>
              <Text>In Progress</Text>
            </View>
            <View>
              <Text>Completed</Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <ScrollView>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
          </ScrollView>
        </View>
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