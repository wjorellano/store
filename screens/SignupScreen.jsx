import React, {useEffect} from "react";
import { View, Text} from "react-native";
import { InputEmail, InputText } from "../components/Inputs";
import { ButtonBlack, ButtonWhite } from "../components/Buttons";
import tw from "twrnc";

const SignupScreen = () => {

    // fetch("https://rickandmortyapi.com/api/character", {
    //     method: "GET",
    //     headers: {
    //     },
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });


    return (
        <View style={tw.style("flex-col h-160 justify-center mt-45 bottom-15 items-center")}>
        <Text style={tw.style("text-2xl mt-2 mb-3 font-bold left-12  mr-auto")}>Welcome &#128075;,</Text>
        <Text style={tw.style("text-lg left-12 mr-auto mb-4 font-semibold ")}>Sign up to continue</Text>
        <InputText 
            placeholder="Name"
            style={tw.style("mt-4")}/>
        <InputText 
            placeholder="Last name"
            style={tw.style("mt-4 mb-5")}/>
        <InputEmail 
            placeholder="Email" 
            style={tw.style("mt-4")}/>
        <InputText 
            placeholder="password"
            style={tw.style("mt-4")}
            secureTextEntry={true}/>
        <ButtonBlack title="Get started"
            style={tw.style("mt-8")}
        />
        <ButtonWhite title="Log in"
            style={tw.style("w-84 rounded-lg m-auto")}/>
        </View>
    );
}

    export default SignupScreen;