import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className="login__logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/ko/thumb/6/62/%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%EB%A1%9C%EA%B3%A0.svg/603px-%EB%94%94%EC%8A%A4%EC%BD%94%EB%93%9C_%EB%A1%9C%EA%B3%A0.svg.png" 
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login
