import { View, Text} from "react-native";
import tw from 'twrnc';
import { ButtonBlack } from '../components/Buttons';
import { InputText } from '../components/Inputs';

const ResetPasswordScreen = () =>{

  return (
    <View style={tw.style("flex-col h-120 justify-center mt-75 bottom-14 items-center")}>
      <Text style={tw.style("text-2xl mt-2 mb-3 font-bold left-12  mr-auto")}>Reset password? &#129305;,</Text>
      <Text style={tw.style("text-lg left-12 mr-auto mb-4 font-semibold ")}>Please enter your new password</Text>
      <InputText
        secureTextEntry={true}
        maxLength={15}
        minLength={8}
        placeholder="Password" 
        style={tw.style("mt-5 ")}/>
      <InputText
        secureTextEntry={true}
        maxLength={15}
        minLength={8}
        placeholder="Confirm password" 
        style={tw.style("mt-5 top-3")}/>
      <ButtonBlack title="Change password"
        style={tw.style("mt-10")}/>
    </View>
  );
}
export default ResetPasswordScreen;