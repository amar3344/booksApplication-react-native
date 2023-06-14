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

export class ForgotPage extends Component<IProps> {

  handleSignUpPage=()=>{
    this.props.navigation.navigate('SignUpPage')
  }

  handleForgotPaswwordPage=()=>{
    this.props.navigation.navigate('VerifyCode')
  }
  
  render() {
    return (
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}>
      <View style={styles.booksContainer}>
        <Text style={styles.loginText}>Recover Password</Text>
        <View style={styles.formContainer}>
            <Text style={styles.tagsDesc}>Forgot Your Password?Don't worry ,enter your 
              email to reset your current password.
            </Text>
            <TextInput placeholder='Email' placeholderTextColor={'grey'} style={styles.emailInput}/>
            <TouchableOpacity style={styles.continueButton} onPress={this.handleForgotPaswwordPage}>
                <Text style={styles.continueText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
                <Text style={styles.footertext}>Don't have an account?</Text>
                <TouchableOpacity onPress={this.handleSignUpPage}>
                    <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

export default ForgotPage


const styles=StyleSheet.create({

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