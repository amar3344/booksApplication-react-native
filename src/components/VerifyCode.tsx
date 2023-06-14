import { Text, View,StyleSheet,ImageBackground,Image} from 'react-native'
import React, { Component } from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler';

interface IProps{
  navigation:{
    navigate:any,
    goBack:any,
  }
}

const bgImage = {uri:'https://i.ibb.co/kHFcvsv/Rectangle-363.png'}

export class VerifyCode extends Component<IProps> {
  
  render() {
    return (
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}>
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.goBackText}>Go to LoginPage</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.booksContainer}>
        <Text style={styles.loginText}>Verify Code</Text>
        <View style={styles.formContainer}>
            <Text style={styles.tagsDesc}>
                Am authentication code hsa been sent to your email.
            </Text>
            <TextInput placeholder='Enter Code' placeholderTextColor={'grey'} style={styles.emailInput}/>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Verify</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <Text style={styles.footertext}>Don't receive a code?</Text>
                <TouchableOpacity>
                    <Text style={styles.signupText}>Resend</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

export default VerifyCode


const styles=StyleSheet.create({

  goBackText:{
    fontSize:30,
    color:'#000'
    
  },

  tagsDesc:{
    fontFamily:'Goutham',
    fontSize:14,
    fontWeight:'400',
    color:'#EAF4F4',
  },

  signupText:{
    fontWeight:'bold',
    fontSize:14,
    marginLeft:2,
    color:'#EAF4F4',
  },

  footerContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:10,
  },


  footertext:{
    textAlign:"center",
  },

  
  continueText:{
    fontFamily:'Goutham',
    fontSize:16,
    fontWeight:'700',
    color:'#000',
    textAlign:'center',
    padding:10,
  },

  bgImage:{
    flex:1,
    justifyContent:'center',
  },

  booksContainer:{
    padding:20,
  },

  continueButton:{
    backgroundColor:"#CDE7BE",
    borderRadius:8,
    // borderWidth:2,
    // borderColor:'#000',
    marginTop:0,
  },

  emailInput:{
    backgroundColor:"#EAF4F4",
    borderRadius:8,
    // borderWidth:2,
    // borderColor:'#000',
    marginTop:10,
    marginBottom:0,
    padding:10,
  },
  
  loginText:{
    fontFamily:"Gotham",
    fontStyle:'normal',
    fontWeight:'700',
    fontSize:32,
    color:'#EAF4F4',
    lineHeight:38,
    marginBottom:20,
  },

  formContainer:{
    backgroundColor:'#ffffff26',
    borderRadius:12,
    padding:10,
    gap:10,
  },




})