import React, {useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginScreen, OnboardingScreen, RegisterScreen} from '../src/routers'
import  AsyncStorage  from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const PageStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        })
    });

    if (isFirstLaunch === null) {
        return null; 
      } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
      } else {
        routeName = 'Login';
      }

    return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen 
            name = 'Onboarding' 
            component = {OnboardingScreen} 
            options={{header: () => null}}/>
        <Stack.Screen 
            name = 'Login' 
            component = {LoginScreen} 
            options={{header: () => null}}/>
        <Stack.Screen 
            name = 'Register'  
            component = {RegisterScreen}
            />
        </Stack.Navigator>
    )
}

export default PageStack;