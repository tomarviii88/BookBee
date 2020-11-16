import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

const Signup = ({ setIsLogin }) => {
  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <p>Signup</p>
        <form>
          <input type='text' placeholder='Full name' />
          <input placeholder='Email' type='text' />
          <input placeholder='Password' type='password' />
          <p
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Already have an account?
          </p>
          <button>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
