import React from 'react';
import Login from './Login';
import SignUp from './SignUp'
import './menu.css';

const Home = () => {


  return (
    <div className="hero">
    <img className="cover" src="https://cdn.dribbble.com/users/694830/screenshots/3077965/sydney_v09_800_600.png" />
    <div>
      <h1> Welcome to the Opera House! </h1>
      < Login />
      < SignUp />

    </div>
    </div>
  );
}

export default Home
