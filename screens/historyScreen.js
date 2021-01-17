import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


const ProfileScreen = ({}) => {
    return (
      <View style={ styles.screen }>
        <Text>Product History</Text>
        <Text>if the database existed name of the user on the product table. </Text>
        <Text>It will display at here</Text>
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
  
