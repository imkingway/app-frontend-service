import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const ProfileScreen = ({navigation}) => {
    return (
      <View style={ styles.screen }>
        <Text>Profile</Text>
        <Button 
        title = "Go to details screen again"
        onPress= {() => navigation.push("Details")}
        />
        <Button 
        title = "Go to Home"
        onPress= {() => navigation.push("Home")}
        />
        <Button 
        title = "Go back"
        onPress= {() => navigation.goBack()}
        />
        <Button 
        title = "Go to the first screen"
        onPress= {() => navigation.popToTop()}
        />
      </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
});
  
