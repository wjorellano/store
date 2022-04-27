import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import {useNavigation} from '@react-navigation/native';


const HomeScreen = () => {

    const navigation = useNavigation();
    
    return (
    <View style={{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    }} >
        <Text>Home Screen</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("Stack")}
        >
        <Text>Go to Stack Screen</Text>
        </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
