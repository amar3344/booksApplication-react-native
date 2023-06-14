import { Text, View,Image,StyleSheet,ScrollView } from 'react-native'
import React, { Component } from 'react'
import FireIcon from 'react-native-vector-icons/SimpleLineIcons'
import BookIcon from 'react-native-vector-icons/Feather'
import HeadPhone from 'react-native-vector-icons/Feather'
import Glasses from 'react-native-vector-icons/Ionicons'

export class Home extends Component {
  render() {
    return (
      <View style={styles.homeCont}>
        <View style={styles.goodafternooncon}>
            <View>
                <Text style={styles.goodmorning}>Good Afternoon</Text>
                <Image source={require('../assets/homeimg/good.png')}/>
            </View>
            <Image source={require('../assets/passwordImg/avatar.png')}/>
        </View>
        <View style={styles.all}>
            <ScrollView horizontal={true}>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img1.png')}/>
            </View>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img2.png')}/>
            </View>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img3.png')}/>
            </View>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img4.png')}/>
            </View>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img1.png')}/>
            </View>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img1.png')}/>
            </View>
            <View style={styles.reels}>
                <Image source={require('../assets/homeimg/img3.png')}/>
            </View>
            </ScrollView>
        </View>
        <View style={styles.all}>
            <ScrollView horizontal={true}>
            <View style={styles.fireCOnt}>
                <FireIcon name="fire" color={'#000'} size={20}/>
                <Text style={styles.trendingText}>Trending</Text>
            </View>
            <View style={styles.emptyButtons}>
                <BookIcon name="book-open" color={'#fff'} size={20}/>
                <Text style={styles.emptyText}>5-Minutes Read</Text>
            </View>
            <View style={styles.emptyButtons}>
                <HeadPhone name="headphones" color={'#fff'} size={20}/>
                <Text style={styles.emptyText}>Trending</Text>
            </View>
            </ScrollView>
        </View>
        <View>
            <Image source={require('../assets/homeimg/frame1.png')}/>
        </View>
        <View style={styles.trendingCon}>
            <Text style={styles.trending}>Trending</Text>
            <Text style={styles.showall}>Show all</Text>
        </View>
        <View style={styles.all}>
            <View style={styles.albumsCon}>
                <Image source={require('../assets/homeimg/goodguy.png')}/>
                <View>
                    <Text>The Good guy</Text>
                    <Text>Mark mcalister</Text>
                    <View>
                        <HeadPhone name="headphones"/>
                        <Text>5m</Text>
                    </View>
                    <View>
                        <Glasses name="ios-glasses"/>
                        <Text>8m</Text>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
            <Image source={require('../assets/homeimg/f.png')}/>
            <Image source={require('../assets/homeimg/creative.png')}/>
        </View>
        <View style={styles.trendingCon}>
            <Text style={styles.trending}>Trending</Text>
            <Text>Show all</Text>
        </View>
        <View style={styles.all}>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
        </View>
        <View>
            <Text>5-Minutes read</Text>
            <Text>Show all</Text>
        </View>
        <View style={styles.all}>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
            <Image source={require('../assets/homeimg/goodguy.png')}/>
        </View>

      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({

    albumsCon:{

    },

    showall:{
        fontFamily:"Goutham",
        fontSize:15,
        fontWeight:'500',
        color:'#fff'
    },

    trending:{
        fontFamily:"Goutham",
        fontSize:20,
        fontWeight:'700',
        color:'#fff'
    },

    emptyText:{
        fontSize:15,
        fontWeight:'600',
        color:'#fff',
        paddingLeft:3,
    },

    emptyButtons:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        padding:10,
        backgroundColor:'trasparent',
        borderWidth:2,
        borderColor:'#fff',
        marginRight:3,
    },

    trendingText:{
        fontSize:15,
        fontWeight:'600',
        color:'#000',
        paddingLeft:2,
    },

    fireCOnt:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        padding:10,
        backgroundColor:'#CDE7BE',
        width:110,
        height:42,
        marginRight:3,
    },

    reels:{
        borderWidth:2,
        padding:2,
        borderColor:'#fff',
        borderRadius:100,
        margin:1,
    },

    trendingCon:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
    },

    goodmorning:{
        fontFamily:'Goutham',
        fontWeight:'800',
        fontSize:25,
        color:'#fff',
    },

    homeCont:{
        backgroundColor:'#282828',
        padding:20,
        gap:10,
    },

    goodafternooncon:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    all:{
        flexDirection:'row',
        alignItems:'center',
    },
})