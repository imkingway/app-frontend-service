import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import ScanScreen from '../screens/scanScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ScanStack = createStackNavigator();


const BottomNavigation = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Scan"
            component={ScanStackScreen}
            options={{
              tabBarLabel: 'Scan',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

//implement to create home stack 
const HomeStackScreen = ({navigation}) => {
    return(
      <HomeStack.Navigator>
        <HomeStack.Screen name = "Home" component = {HomeScreen} 
        options = {{
          headerLeft: () => (
            <Icon.Button name= 'ios-menu' 
            size={25}
            backgroundColor ="#009389" 
            onPress = {() => navigation.openDrawer()}
            ></Icon.Button>
          )}
        }/>
      </HomeStack.Navigator>
    )
  }
  
  //implement to create profile stack 
  const ProfileStackScreen = ({}) => {
    return(
    <ProfileStack.Navigator>
      <ProfileStack.Screen name = "Profile" component = {ProfileScreen} />
    </ProfileStack.Navigator>
    )
  }

  const ScanStackScreen = ({}) => {
    return(
    <ScanStack.Navigator>
      <ScanStack.Screen name = "Scan" component = {ScanScreen} />
    </ScanStack.Navigator>
    )
  }