import { View, Text} from "react-native";
import tw from 'twrnc';
import { ButtonBlack, ButtonWhite } from '../components/Buttons';
import { InputText, InputEmail } from '../components/Inputs';

const LoginScreen = () =>{

  return (
    <View style={tw.style("flex-col h-120 justify-center mt-60 bottom-15 items-center")}>
      <Text style={tw.style("text-2xl mt-2 mb-3 font-bold left-12  mr-auto")}>Welcome &#128075;,</Text>
      <Text style={tw.style("text-lg left-12 mr-auto mb-4 font-semibold ")}>Sign in to continue</Text>
      <InputEmail 
        placeholder="Email" 
        style={tw.style("mt-5 top-5")}/>
      <InputText 
        placeholder="password"
        style={tw.style("mt-4")}/>
      <Text style={tw.style("top-4 mr-auto left-12  font-semibold")}>Forgot password?</Text>
      <ButtonBlack title="Get started"
        style={tw.style("mt-8")}
      />
      <Text style={tw.style("top-5  font-semibold")}>Don't have an account yet?</Text>
      <ButtonWhite onPress={()=>{alert("screen Signup")}} title="Create account"
        style={tw.style("w-84 rounded-lg m-auto mt-14")}/>
    </View>
  );
}

export default LoginScreen;