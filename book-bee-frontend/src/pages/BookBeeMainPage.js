import React, { useState } from 'react';
import '../styles/bookbee.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const BookBeeMainPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className='book-bee-main-page-container'>
      <div className='book-bee-image-overlay'></div>
      <div className='book-bee-image'>
        <div className='welcome-text'>
          <h1>Welcome, to BookBee!</h1>
          <p>A platform for all book lovers.</p>
        </div>
        <div className='login-signup-container'>
          {isLogin ? (
            <Login setIsLogin={setIsLogin} />
          ) : (
            <Signup setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BookBeeMainPage;
