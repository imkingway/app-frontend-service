import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavigation from './components/bottom-navigation';
import LoginScreen from './screens/loginScreen';
import ProfileInfoScreen from './screens/profileInfoScreen'

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//implement to create side bar 
 const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name = "Home" component = {BottomNavigation} />
        <Drawer.Screen name = "Edit Profile" component = {ProfileInfoScreen} />
        <Drawer.Screen name = "Sign Out" component = {LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;



