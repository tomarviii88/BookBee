import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const Login = ({ setIsLogin }) => {
  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <p>Login</p>
        <form>
          <input placeholder='Email' type='text' />
          <input placeholder='Password' type='password' />
          <p
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Don't have an account?
          </p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
