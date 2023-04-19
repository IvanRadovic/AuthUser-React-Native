import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { createUser } from '../util/atuh';
import { Alert } from 'react-native';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler ({email, password}) {
    setIsAuthenticating(true);
    try {
      await createUser(email,password);
    } catch (error) {
      Alert.alert("Authentication failed!", "Could not create user, please check your input!");
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating user.."/>
  }


  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
