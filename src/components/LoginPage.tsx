import { Text, View,StyleSheet,ImageBackground,Image} from 'react-native'
import React, { Component } from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler';

interface IProps{
  navigation :{
    navigate:any
  }
}

interface IState{
  emailInput:string,
  errorMessage:boolean,
}

const bgImage = {uri:'https://i.ibb.co/kHFcvsv/Rectangle-363.png'}

export class LoginPage extends Component<IProps,IState> {

  state:IState = {emailInput:'',errorMessage:false}

  handleLoginPage=()=>{
    if(this.state.emailInput !== ""){
      this.props.navigation.navigate('PasswordPage')
    }else{
      this.setState({errorMessage:true})
    }
  }

  handleSignUpPage=()=>{
    this.props.navigation.navigate("SignUpPage")
  }

  handleforgotPage=()=>{
    this.props.navigation.navigate('ForgotPage')
  }

  getEmailInput=(email:string)=>{
    this.setState({emailInput:email.trim()})
  }


  render() {
    console.log(this.state.emailInput)
    return (
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}>
      <View style={styles.booksContainer}>
        <Text style={styles.loginText}>Log in</Text>
        <View style={styles.formContainer}>
            <TextInput placeholder='Email' placeholderTextColor={'grey'} style={styles.emailInput} onChangeText={(string)=>this.getEmailInput(string)}/>
            <TouchableOpacity style={styles.continueButton} onPress={this.handleLoginPage}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
            {this.state.errorMessage && <Text style={styles.errorMessage}>Please Enter Valid Email</Text>}
            <Text style={styles.forgetText} onPress={this.handleforgotPage}>Forgot Password?</Text>
            <View style={styles.orContainer}>
                <Text>--------------------</Text>
                <Text>Or</Text>
                <Text>---------------------</Text>
            </View>
            <View style={styles.eachCard}>
                <Image source={require('../assets/loginpageimg/facebook.svg')} style={styles.eachImageCard}/>
                <Text style={styles.eachCardText}>Login with Facebook</Text>
            </View>
            <View style={styles.eachCard}>
                <Image source={require('../assets/loginpageimg/google.png')} style={styles.eachImageCard}/>
                <Text style={styles.eachCardText}>Login with Google</Text>
            </View>
            <View style={styles.eachCard}>
                <Image source={require('../assets/loginpageimg/apple-logo.png')} style={styles.eachImageCard}/>
                <Text style={styles.eachCardText}>Login with Apple</Text>
            </View>
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

export default LoginPage


const styles=StyleSheet.create({


  errorMessage:{
    color:'red',
    fontSize:16,
    fontWeight:'500',
    fontFamily:"Goutham",

  },

  signupText:{
    fontWeight:'bold',
    fontSize:14,
    marginLeft:2
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

  eachImageCard:{
    width:20,
    height:20,
  },

  eachCardText:{
    flex:1,
    textAlign:'center',
    color:'#000',
    fontSize:16,
    fontFamily:"Goutham",
    fontStyle:"normal",
    fontWeight:'400',
  },

  eachCard:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#EAF4F4',
    borderRadius:8,
    padding:10,
  },

  orContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  forgetText:{
    textAlign:'center',
    color:'#fff',
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
    marginTop:150,
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
    padding:10,
    gap:20,
  },




})