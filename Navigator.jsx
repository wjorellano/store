import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();

const MyStack = () => {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    // headerShown: false,
                    headerTitleAlign: "center",
                    headerTitle: "Home",
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center",
                }}
            />
        </HomeStackNavigator.Navigator>
    );
};

const MyTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor:"black",
                headerShown: false,
            }}>
            <Tab.Screen 
                name="Home" 
                component={MyStack} />
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{
                    tabBarLabel:"Settings",
                    // tabBarBadge:"+99",
                }}/>
        </Tab.Navigator>
    );
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTab />
        </NavigationContainer>
    );
}

export default Navigation;