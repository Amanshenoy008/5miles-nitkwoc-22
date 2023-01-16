import React, { Component , useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      username: '',
      password: ''
   }
   handleusername = (text) => {
      this.setState({ username: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   login = (username, pass) => {
     // alert('User-name: \n' + username + 'Password: ' + pass)
     
   }

   

   render() {
    return (
       <View style = {styles.container}>
         <Text style={styles.label}> E-mail :</Text>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "User-name"
             placeholderTextColor = "#F4F1F1"
             autoCapitalize = "none"
             onChangeText = {this.handleusername}/>
          
          <Text  style={styles.label}>PASSWORD :</Text>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Password"
             placeholderTextColor = "#F4F1F1"
             autoCapitalize = "none"
             secureTextEntry={true}
             onChangeText = {this.handlePassword}/>
             
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.login(this.state.username, this.state.password)
             }>
             <Text style = {styles.submitButtonText}> LogIn </Text>
          </TouchableOpacity>
       </View>
    )
 }
}
export default Inputs

const styles = StyleSheet.create({
 container: {
    paddingTop: 35
 },
 input: {
   padding:10,
    height: 40,
    borderColor: '#F4F1F1',
    borderWidth: 1,
    backgroundColor:'#F4F1F1',
    color:'#0F0F0F',
    width: 200,
    borderRadius: 10
 },
 submitButton: {
    backgroundColor: '#81B622',
    padding: 10,
    marginTop: 10,
    height: 40,
    borderRadius: 30
 },
 submitButtonText : {
   textAlign: 'center',
   fontSize: 15
 },
 label:{
   fontSize: 20,
   marginTop: 20
 }

})