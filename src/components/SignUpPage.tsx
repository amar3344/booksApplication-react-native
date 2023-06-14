import { Text, View,StyleSheet,ImageBackground,Image} from 'react-native'
import React, { Component } from 'react'
import { TextInput,TouchableOpacity } from 'react-native-gesture-handler';

interface IProps{
  navigation:{
    navigate:any,
  }
}

interface IState{
  emailInput:string,
  nameInput:string,
  passwordInput:string,
  errorMessage:boolean,
}

const bgImage = {uri:'https://i.ibb.co/kHFcvsv/Rectangle-363.png'}

export class SignUpPage extends Component<IProps,IState> {

  state:IState = {emailInput:'',nameInput:'',passwordInput:'',errorMessage:false}

  getNameInput=(name:string)=>{
    this.setState({nameInput:name.trim()})
  }

  getEmailInput=(email:string)=>{
    this.setState({emailInput:email.trim()})
  }

  getPasswordInput=(password:string)=>{
    this.setState({passwordInput:password.trim()})
  }

  handleSignUpPage=()=>{
    if(this.state.emailInput && this.state.nameInput && this.state.passwordInput !== ''){
      this.props.navigation.navigate('LoginPage')
    }else{
      this.setState({errorMessage:true})
    }
  }

  handleLoginPage=()=>{
    this.props.navigation.navigate('LoginPage')
  }

  render() {
    return (
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.bgImage}>
      <View style={styles.booksContainer}>
        <Text style={styles.loginText}>Sign Up</Text>
        <View style={styles.formContainer}>
            <Text style={styles.tagsDesc}>Looks like you don't have an account.
            Let's create a new account for you.</Text>
            <TextInput placeholder='Name' placeholderTextColor={'grey'} style={styles.emailInput} onChangeText={(string)=>this.getNameInput(string)} />
            <TextInput placeholder='Email' placeholderTextColor={'grey'} style={styles.emailInput} onChangeText={(string)=>this.getEmailInput(string)}/>
            <TextInput placeholder='Password' placeholderTextColor={'grey'} style={styles.emailInput} onChangeText={(string)=>this.getPasswordInput(string)} />
            <Text>By selecting Create Account below.I agree to <Text>Terms of Service & Privacy Policy</Text></Text>
            <TouchableOpacity style={styles.continueButton} onPress={this.handleSignUpPage}>
                <Text style={styles.continueText}>Create Account</Text>
            </TouchableOpacity>
            {this.state.errorMessage && <Text style={styles.errorMessage}>Please Enter Valid Details</Text>}
            <View style={styles.footerContainer}>
                <Text style={styles.footertext}>Already have an account?</Text>
                <TouchableOpacity onPress={this.handleLoginPage}>
                    <Text style={styles.signupText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

export default SignUpPage


const styles=StyleSheet.create({

  errorMessage:{
    fontSize:16,
    color:'red',
    fontFamily:"Goutham"
  },

  tagsDesc:{
    fontSize:16,
    fontFamily:'Goutham',
    fontWeight:'400',
    color:'#EAF4F4',
  },

  signupText:{
    fontWeight:'bold',
    fontSize:14,
    marginLeft:2,
    color:"#EAF4F4",
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
    marginTop:110,
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
    padding:16,
    gap:10,
  },




})