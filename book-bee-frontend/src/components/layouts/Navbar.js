import React from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <div className='logo'></div>
        <h1>BookBee</h1>
      </div>
      <div className='navbar-ul'>
        <ul>
          <li className='active-li'>Home</li>
          <li>Explore</li>
          <li>Book Clubs</li>
          <li>Book Reviews</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
