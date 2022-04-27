import React from "react";
import { View, Text, TextInput} from "react-native";
import tw from "twrnc";

export const InputText = (props) => {
    return(
        <TextInput
            style={tw.style(props.style,"p-3 w-84 text-base border-2 border-black shadow-sm border-gray-300 rounded-lg")}
            placeholder={props.placeholder}>
        </TextInput>
    )
}

export const InputEmail = (props) => {
    
    const [state, setState ] = React.useState("");
    
    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");
            setState(text);
            return false;
        }
        else {
            setState(text);
            console.log("Email is Correct");
        }
    }

    return(
        <TextInput
            style={tw.style("p-3 w-84 text-base border-2 border-black shadow-sm border-gray-300 rounded-lg")}
            placeholder={props.placeholder}
            onChangeText={(text) => validate(text)}
            value={state}>
        </TextInput>
    )
}
