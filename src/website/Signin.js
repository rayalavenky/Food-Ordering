import React from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className="App">
      <div className="centered-content">
      <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple69/v4/89/1f/15/891f151d-0ed6-785a-7889-21a87aef7212/source/512x512bb.jpg" alt="Restaurant Logo" className='logo1' />
        <h1 className="title">Let's Eat</h1>
        <div className="button-container">
          <Link to={"/login"} className="home-button">Login</Link>
          <Link to={"/register"} className="home-button">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
