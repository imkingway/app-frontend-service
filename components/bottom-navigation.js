import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/profileScreen';
import HistoryScreen from '../screens/historyScreen';
import ScanScreen from '../screens/scanScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ScanStack = createStackNavigator();


const BottomNavigation = () => {
    return (
        <Tab.Navigator
          initialRouteName="Profile"
          activeColor="#e91e63"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Scan"
            component={ScanStackScreen}
            options={{
              tabBarLabel: 'Scan',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-scan" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            component={HistoryStackScreen}
            options={{
              tabBarLabel: 'History',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-albums" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    )
}

export default BottomNavigation;

//implement to create profile stack 
const ProfileStackScreen = ({navigation}) => {
    return(
      <ProfileStack.Navigator>
        <ProfileStack.Screen name = "Profile" component = {ProfileScreen} 
        options = {{
          headerLeft: () => (
            <Icon.Button name= 'ios-menu' 
            size={25}
            backgroundColor ="#009389" 
            onPress = {() => navigation.openDrawer()}
            ></Icon.Button>
          )}
        }/>
      </ProfileStack.Navigator>
    )
  }
  
  //implement to create profile stack 
  const HistoryStackScreen = ({}) => {
    return(
    <HistoryStack.Navigator>
      <HistoryStack.Screen name = "History" component = {HistoryScreen} />
    </HistoryStack.Navigator>
    )
  }

  const ScanStackScreen = ({}) => {
    return(
    <ScanStack.Navigator>
      <ScanStack.Screen name = "Scan" component = {ScanScreen} />
    </ScanStack.Navigator>
    )
  }