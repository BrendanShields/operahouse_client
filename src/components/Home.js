import React from 'react';
import Login from './Login';
import SignUp from './SignUp'
import './menu.css';

const Home = () => {


  return (
    <div className="home">
      <h1> Welcome to the Opera House! </h1>
      < Login />
      < SignUp />
    </div>

  );
}

export default Home
