
import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Slider from './Slider';

const Home = () => {


return (
    <div>
      <h1> Welcome to the Opera House! </h1>
      <Slider />
    </div>
  );
}

export default Home
