import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserInfoScreen from './UserInfoScreen';
import SettingScreen from './SettingScreen';
import { AntDesign } from '@expo/vector-icons'; 
import UserManage from './UserManage';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarActiveTintColor: '#e91e63'
    }}>
        <Tab.Screen 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <AntDesign name="user" size={24} color="black" />
        }}
        name='UserInfo' 
        component={UserInfoScreen}/>

        <Tab.Screen 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <AntDesign name="setting" size={24} color="black"  />
        }}
        name='Setting' 
        component={SettingScreen}/>

        <Tab.Screen 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => <AntDesign name="user" size={24} color="black" />
        }}
        name='UserMan' 
        component={UserManage}/>
    </Tab.Navigator>
  )
}

export default HomeScreen