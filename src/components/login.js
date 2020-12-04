import React from 'react';
import { Button } from '@material-ui/core';

export default function Login() {
  const [showSigninContainer, setShowSigninContainer] = React.useState(false);
  const [showSignUpContainer, setSignUpContainer] = React.useState(false);

  const handleSignUpClick = () => {
    setSignUpContainer(true);
  };

  const handleLoginClick = () => {
    setShowSigninContainer(true);
  };

  const loginContainer = (
    <div className="login-conatiner">
      <Button>Login</Button>
      <span>Not a Member yet?</span>
      <span className={'signup-link'} onClick={handleSignUpClick}>
        Signup...
      </span>
      <span>Rgister online and link to various Hospitals across...</span>
    </div>
  );
  const signupContainer = (
    <div className="sigin-conatiner">
      <span>Sign In</span>
      <Button>Login</Button>
    </div>
  );
  const registerContainer = (
    <div className="register-conatiner">
      <span>Register</span>
      <Button>Register</Button>
    </div>
  );
  return (
    <React.Fragment>
      {!showSigninContainer && !showSignUpContainer && loginContainer}
      {showSigninContainer && signupContainer}
      {showSignUpContainer && registerContainer}
    </React.Fragment>
  );
}
