// Menu.js

import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="centered-content">
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple69/v4/89/1f/15/891f151d-0ed6-785a-7889-21a87aef7212/source/512x512bb.jpg" alt="Restaurant Logo" className='logo1' />
      <h1>Menu</h1>
      <p>These are the types of food items available now....</p>
      <div className="menu-buttons">
        <a href='/starters'>
        <button className="menu-button">Starters</button>
        </a>
        <a href='/riceitems'>
        <button className="menu-button">Rice  Items</button>
        </a>
        <a href='/pizza'>
        <button className="menu-button">Pizza</button>
        </a>
        <a href='/cooldrinks'>
        <button className="menu-button">Cool Drinks</button>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Menu;

