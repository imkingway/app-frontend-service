import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginPage = ({navigation}) => {
  const [ text, setText ] = useState('');
  return (
    <View style={ style.container }>

      <StatusBar style="auto" />

      <TextInput 
      style = { style.inputText }
      placeholder = "Username" 
      onChangeText = { text => setText(Text) }
      defaultValue = { text } 
      />

      <TextInput style = { style.inputText }
      secureTextEntry
      placeholder = "Password" 
      onChangeText = { text => setText(Text) }
      defaultValue = { text } 
      />

      <View style = { style.buttonContainer }>

        <TouchableOpacity style = { style.button }
        onPress = { ()=> alert('Hello World') }>
          <Text style = { style.buttonText }>Signin</Text>
        </TouchableOpacity>

        <TouchableOpacity style = { style.button }
        onPress = { ()=> navigation.navigate('signupScreen') }>
          <Text style = { style.buttonText }>Signup</Text>

        </TouchableOpacity>
        
      </View>
    </View>
  );
}

export default LoginPage;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%"
  },
  button:{
    backgroundColor: "#92ACA7",
    width: 120,
    height: 50,
    marginTop: 20,
  },
  inputText:{
    backgroundColor: "rgba(233,233,233,1)",
    borderWidth: 0,
    borderColor: "#92ACA7",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    width: 240,
    height: 48,
    padding: 10
  },
  buttonText:{
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});

