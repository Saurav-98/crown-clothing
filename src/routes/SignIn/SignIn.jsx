import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>SignIn</h1>
    </div>
  );
};

export default SignIn;
