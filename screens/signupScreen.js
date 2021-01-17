import * as React from 'react';
import { Button } from 'react-native-paper';
import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  StatusBar, 
  KeyboardAvoidingView
} from 'react-native';

export default SignUpPage;

const SignUpPage = () => {
  return (
    <View style={ style.container }>
      <StatusBar style="auto" />
      <TextInput 
      style = { style.inputText }
      theme = {{color:{primary:"blue"}}}
      label = 'Full Name' 
      mode = "outline"
      onChangeText = { text => setText(Text) }
      defaultValue = { text } 
      />

      <TextInput style = { style.inputText }
      label = 'Email' 
      mode = "outline"
      onChangeText = { text => setText(Text) }
      defaultValue = { text } 
      />

      <TextInput style = { style.inputText }
      secureTextEntry
      placeholder = "Enter Your Password" 
      onChangeText = { text => setText(Text) }
      defaultValue = { text } 
      />

      <TextInput style = { style.inputText }
      secureTextEntry
      placeholder = "Re-enter Your Password" 
      onChangeText = { text => setText(Text) }
      defaultValue = { text } 
      />

      <View style = { style.buttonContainer }>

        <TouchableOpacity style = { style.button }
        onPress = { ()=> alert('Hello World') }>
          <Text style = { style.buttonText }>Signin</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    width: "70%"
  },
  button:{
    backgroundColor: "#92ACA7",
    width: 120,
    height: 50,
    marginTop: 20,
  },
  inputText:{
    marginLeft: 18,
    marginRight: 18,
    marginTop: 18,
    // backgroundColor: "rgba(233,233,233,1)",
    // borderWidth: 0,
    // borderColor: "#92ACA7",
    // shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 5,
    // shadowOpacity: 0.01,
    // shadowRadius: 0,
    // width: 240,
    // height: 48,
    // padding: 10
  },
  buttonText:{
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  theme:{
    color: "blue"
  }
});

