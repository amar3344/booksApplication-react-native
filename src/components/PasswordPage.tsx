import { Text, View,StyleSheet,ImageBackground,Image} from 'react-native'
import React, { Component } from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler';

interface IProps{
  navigation:{
    navigate:any,
  }
}

interface IState{
  passwordInput:string
}

const bgImage = {uri:'https://i.ibb.co/kHFcvsv/Rectangle-363.png'}

export class PasswordPage extends Component<IProps,IState> {

  state:IState = {passwordInput:''}

  handleLoginPage=()=>{
    if(this.state.passwordInput !== ''){
      this.props.navigation.navigate('BottomNavigation')
    }
  }

  getPasswordInput=(password:string)=>{
    this.setState({passwordInput:password.trim()})
  }

  handleForgotPage=()=>{
    this.props.navigation.navigate('ForgotPage')
  }

  render() {
    return (
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}>
      <View style={styles.booksContainer}>
        <Text style={styles.loginText}>Log in</Text>
        <View style={styles.formContainer}>
            <View style={styles.avatarContainer}>
              <Image source={require('../assets/passwordImg/avatar.png')}/>
              <View style={styles.nameCont}>
                <Text style={styles.nameText}>John Doe</Text>
                <Text>john.doe@example.com</Text>
              </View>
            </View>
            <TextInput placeholder='Password' placeholderTextColor={'grey'} style={styles.emailInput} onChangeText={(string)=>this.getPasswordInput(string)}/>
            <TouchableOpacity style={styles.continueButton} onPress={this.handleLoginPage}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleForgotPage}>
              <Text style={styles.forgetText} >Forgot Password?</Text>
            </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

export default PasswordPage


const styles=StyleSheet.create({

  nameText:{
    fontFamily:'Goutham Bold',
    fontWeight:'700',
    fontSize:18,
    color:'#EAF4F4'
  },

  nameCont:{
    paddingLeft:20,
  },

  avatarContainer:{
    flexDirection:'row',
    alignItems:'center',
  },

  forgetText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'700',
  },

  continueText:{
    fontFamily:'Goutham',
    fontSize:14,
    fontWeight:'500',
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
    color:'#000'
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
    padding:20,
    gap:32,
  },




})