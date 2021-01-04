import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={ styles.screen }>
        <Text>Profile Info</Text>
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
  
  