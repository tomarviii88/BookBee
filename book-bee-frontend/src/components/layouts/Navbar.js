import React, { useEffect } from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  useEffect(() => {
    console.log(window.location.pathname);
  });
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <div className='logo'></div>
        <h1>BookBee</h1>
      </div>
      <div className='navbar-ul'>
        <ul>
          <li className={window.location.pathname === '/' && 'active-li'}>
            Home
          </li>
          <li
            className={window.location.pathname === '/explore' && 'active-li'}
          >
            Explore
          </li>
          <li
            className={window.location.pathname === '/bookclub' && 'active-li'}
          >
            Book Clubs
          </li>
          <li
            className={
              window.location.pathname === '/bookreview' && 'active-li'
            }
          >
            Book Reviews
          </li>
          <li
            className={window.location.pathname === '/profile' && 'active-li'}
          >
            Profile
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
