import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FireIcon from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class Home extends Component {
  render() {
    return (
      <View style={styles.homeCont}>
        <View style={styles.goodafternooncon}>
          <View>
            <Text style={styles.goodmorning}>Good Afternoon</Text>
            <Image source={require('../assets/homeimg/good.png')} />
          </View>
          <Image source={require('../assets/passwordImg/avatar.png')} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.all}>
            <ScrollView horizontal={true}>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img1.png')} />
              </View>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img2.png')} />
              </View>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img3.png')} />
              </View>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img4.png')} />
              </View>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img1.png')} />
              </View>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img1.png')} />
              </View>
              <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img3.png')} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.all}>
            <ScrollView horizontal={true}>
              <View style={styles.fireCOnt}>
                <FireIcon name="fire" color={'#000'} size={20} />
                <Text style={styles.trendingText}>Trending</Text>
              </View>
              <View style={styles.emptyButtons}>
                <Feather name="book-open" color={'#fff'} size={20} />
                <Text style={styles.emptyText}>5-Minutes Read</Text>
              </View>
              <View style={styles.emptyButtons}>
                <Feather name="headphones" color={'#fff'} size={20} />
                <Text style={styles.emptyText}>Trending</Text>
              </View>
            </ScrollView>
          </View>
          <View>
            <Image
              source={require('../assets/homeimg/frame1.png')}
              style={styles.labelImage}
            />
          </View>
          <View style={styles.trendingCon}>
            <Text style={styles.trending}>Trending</Text>
            <Text style={styles.showall}>Show all</Text>
          </View>
          <View style={styles.all}>
            <ScrollView horizontal={true}>
              <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/goodguy.png')} />
                <View style={{width: '80%'}}>
                  <Text>The Good guy</Text>
                  <Text>Mark mcalister</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Feather name="headphones" />
                      <Text>5m</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-glasses" />
                      <Text>8m</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/f.png')} />
                <View style={{width: '80%'}}>
                  <Text>The Good guy</Text>
                  <Text>Mark mcalister</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Feather name="headphones" />
                      <Text>5m</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-glasses" />
                      <Text>8m</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/creative2.png')} />
                <View style={{width: '80%'}}>
                  <Text>The Good guy</Text>
                  <Text>Mark mcalister</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Feather name="headphones" />
                      <Text>5m</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-glasses" />
                      <Text>8m</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/goodguy.png')} />
                <View style={{width: '80%'}}>
                  <Text>The Good guy</Text>
                  <Text>Mark mcalister</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Feather name="headphones" />
                      <Text>5m</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-glasses" />
                      <Text>8m</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/creative2.png')} />
                <View style={{width: '80%'}}>
                  <Text>The Good guy</Text>
                  <Text>Mark mcalister</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Feather name="headphones" />
                      <Text>5m</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-glasses" />
                      <Text>8m</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/f.png')} />
                <View style={{width: '80%'}}>
                  <Text>The Good guy</Text>
                  <Text>Mark mcalister</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Feather name="headphones" />
                      <Text>5m</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                      }}>
                      <Ionicons name="ios-glasses" />
                      <Text>8m</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.trendingCon}>
            <Text style={styles.trending}>Trending</Text>
            <Text>Show all</Text>
          </View>
          <View style={styles.all}>
            <Image source={require('../assets/homeimg/goodguy.png')} />
            <Image source={require('../assets/homeimg/goodguy.png')} />
            <Image source={require('../assets/homeimg/goodguy.png')} />
          </View>
          <View>
            <Text>5-Minutes read</Text>
            <Text>Show all</Text>
          </View>
          <View style={styles.all}>
            <Image source={require('../assets/homeimg/goodguy.png')} />
            <Image source={require('../assets/homeimg/goodguy.png')} />
            <Image source={require('../assets/homeimg/goodguy.png')} />
          </View>
        </ScrollView>
        <View style={styles.musicContainer}>
          <Image style={styles.musicImage} source={require('../assets/homeimg/f.png')}/>
          <View style={styles.listingCon}>
            <Text style={styles.continueText}>Continue Listing</Text>
            <Text>Managers who want to create
                positive work enviroments...</Text>
          </View>
          <View style={styles.musicControls}>
            <View style={styles.controls}>
              <Ionicons name="ios-play-outline" style={styles.control} />
            </View>
            <View style={styles.controls}>
              <Ionicons name="play-forward-outline" style={styles.control}/>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({

  continueText:{
    fontSize:14,
    fontFamily:"Goutham",
    fontWeight:'600',
    color:'#fff'

  },

  control:{
    width:15,
    height:15,
    color:"#000",
  },

  controls:{
    backgroundColor:"#CDE7BE",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    padding:10,
    marginRight:5,
  },

  musicControls:{
    flexDirection:'row',
    alignItems:'center',
    paddingRight:30,

  },

  listingCon:{
    paddingTop:10,
    PaddingBottom:10,
    paddingLeft:5,
    width:'65%',
  },

  musicImage:{
    height:'100%',
    width:40,
    paddingTop:10,
  },

  musicContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderTopWidth:2,
    borderColor:'#900',
    height:70,
  },
  labelImage: {
    marginTop: 20,
    marginRight: 10,
    width: '100%',
  },

  modalView: {
    backgroundColor:'#000'
  },

  bottommusicPlayer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 75,
    position: 'absolute',

  },

  albumsCon: {
    padding: 5,
  },

  showall: {
    fontFamily: 'Goutham',
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },

  trending: {
    fontFamily: 'Goutham',
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  emptyText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    paddingLeft: 3,
  },

  emptyButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'trasparent',
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 3,
  },

  trendingText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    paddingLeft: 2,
  },

  fireCOnt: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#CDE7BE',
    width: 110,
    height: 42,
    marginRight: 3,
  },

  reels: {
    borderWidth: 2,
    padding: 2,
    borderColor: '#fff',
    borderRadius: 100,
    margin: 1,
  },

  trendingCon: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  goodmorning: {
    fontFamily: 'Goutham',
    fontWeight: '800',
    fontSize: 25,
    color: '#fff',
  },

  homeCont: {
    backgroundColor: '#282828',
    padding: 10,
    gap: 10,
    flex:1,
  },

  goodafternooncon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  all: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
