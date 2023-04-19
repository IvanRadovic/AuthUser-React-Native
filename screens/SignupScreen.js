import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { createUser } from '../util/atuh';

function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signUpHandler ({email, password}) {
    setIsAuthenticating(true);
    await createUser(email,password);
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating user.."/>
  }


  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
