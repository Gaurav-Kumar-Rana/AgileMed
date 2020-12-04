import React from 'react';
import { Button } from '@material-ui/core';

import SignInContainer from './signinContainer';
import SignUpContainer from './signupContainer';

export default function TopSection() {
  const [showSigninContainer, setShowSigninContainer] = React.useState(false);
  const [showSignUpContainer, setSignUpContainer] = React.useState(false);

  const handleSignUpClick = (status) => {
    setSignUpContainer(status);
  };

  const handleLoginClick = (status) => {
    setShowSigninContainer(status);
  };

  const loginContainer = (
    <div className="login-conatiner">
      <Button
        onClick={() => {
          handleLoginClick(true);
        }}
      >
        Login
      </Button>
      <span>Not a Member yet?</span>
      <span
        className={'link'}
        onClick={() => {
          handleSignUpClick(true);
        }}
      >
        Signup...
      </span>
      <span>Rgister online and link to various Hospitals across...</span>
    </div>
  );

  return (
    <div className="top-section">
      {loginContainer}
      {showSigninContainer && <SignInContainer openStatus={showSigninContainer} closeHandler={handleLoginClick} />}
      {showSignUpContainer && <SignUpContainer openStatus={showSignUpContainer} closeHandler={handleSignUpClick} />}
    </div>
  );
}
