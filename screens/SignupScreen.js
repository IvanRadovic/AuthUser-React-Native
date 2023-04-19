import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContext from "../store/auth-context";
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { createUser } from '../util/atuh';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signUpHandler ({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email,password);
      authCtx.authenticate(token);
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
