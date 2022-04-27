import React from 'react';
import tw from 'twrnc';
import { TouchableOpacity, Text, View } from 'react-native';


export const ButtonBlack = (props) => {
    return (
      <TouchableOpacity 
        style={tw.style(props.style,"bg-zinc-900 w-84 rounded-lg m-auto shadow-md")}>
        <Text style={tw.style("text-white p-4 text-center text-lg")}>{props.title}</Text>
      </TouchableOpacity>
    );
}

export const ButtonWhite = (props) => {
    return (
      <TouchableOpacity {...props}
        style={tw.style(props.style,"bg-white border border-gray-100 shadow-md")}>
        <Text style={tw.style("text-zinc-900 p-4 text-center text-lg")}>{props.title}</Text>
      </TouchableOpacity>
    );
}