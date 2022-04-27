import { View, Text} from "react-native";
import tw from 'twrnc';
import { ButtonBlack } from '../components/Buttons';
import { InputEmail } from '../components/Inputs';

const ForgotPasswordScreen = () =>{

  return (
    <View style={tw.style("flex-col h-120 justify-center mt-75 bottom-15 items-center")}>
      <Text style={tw.style("text-2xl mt-2 mb-3 font-bold left-12  mr-auto")}>Forgot password? &#129318;,</Text>
      <Text style={tw.style("text-lg left-12 mr-auto mb-4 font-semibold ")}>Please enter your email</Text>
      <InputEmail
        maxLength={50}
        placeholder="Email" 
        style={tw.style("mt-5 top-5")}/>
      <ButtonBlack title="Send"
        style={tw.style("mt-8")}/>
    </View>
  );
}
export default ForgotPasswordScreen;