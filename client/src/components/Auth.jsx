import React, { useState, useRef } from 'react';
import './design/Auth.css';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const Auth = () => {
  const [show, setShow] = useState(true);
  const formContainerRef = useRef(null);

  const toggleForm = () => {
    setShow(!show);
  };

  return (
    <div className='auth' ref={formContainerRef}>
       <div className='auth-container'>
          <div key={show ? 'login' : 'register'} className={`form-container ${show ? 'show-login' : 'show-register'}`}>
            {show ? <LoginPage toggleForm={toggleForm} /> : <RegisterPage toggleForm={toggleForm} />}
          </div>
      </div>
    </div>
  );
};

export default Auth;