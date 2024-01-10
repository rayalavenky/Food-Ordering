// Navbar.js

import React from 'react';
import './Navbar.css'; // You can style your navbar in a separate CSS file

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        {/* Your restaurant logo and title */}
        
        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple69/v4/89/1f/15/891f151d-0ed6-785a-7889-21a87aef7212/source/512x512bb.jpg" alt="Restaurant Logo" className='logo' />
        <h1>Let's Eat</h1>
      </div>
      <div className="right">
        {/* Your navigation links */}
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/orders">Orders</a>
        <a href="/myorders">My Order</a>
        <a href="/about">About Us</a>

      </div>
    </div>
  );
};

export default Navbar;
