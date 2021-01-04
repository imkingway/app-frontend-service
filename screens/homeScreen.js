import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={ styles.screen }>
      <Text> Home </Text>
      <Button 
        title= "Go to Profile" 
        onPress={() => { navigation.navigate('Profile')}} />
    </View>
  );
      
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
});

export default HomeScreen;