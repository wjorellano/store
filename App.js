import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './Navigator';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


export default function App() {

  const [isLoggined, setIsLoggined] = useState(false);

  if (isLoggined === true) {
    return (
      // <SafeAreaProvider>
        <SignupScreen/>
      // </SafeAreaProvider>
    );
  }else{
    return (
        <Navigation/>
    );
  }
}
