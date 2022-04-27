import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigator';
import ForgotPasswordScreen from './screens/ForgotPassword';
import LoginScreen from './screens/LoginScreen';
import ResetPasswordScreen from './screens/ResetPassword';
import SignupScreen from './screens/SignupScreen';


export default function App() {

  const [isLoggined, setIsLoggined] = useState(false);

  if (isLoggined === false) {
    return (
      // <SafeAreaProvider>
        // <SignupScreen/>
        <LoginScreen/>
        // <ForgotPasswordScreen/>
        // <ResetPasswordScreen/>
      // </SafeAreaProvider>
    );
  }else{
    return (
        <Navigation/>
    );
  }
}
