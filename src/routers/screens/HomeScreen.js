import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={ styles.screen }>
      <Text> Display Profile </Text>
      <Text> FULL NAME :</Text>
      <Text> EMAIL : </Text>
      <Text> USERNAME : </Text>
      <Text> PASSWORD : </Text>

      <Text> UPDATE BUTTON</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },
});

