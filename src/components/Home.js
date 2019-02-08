import React, { useState, Components } from 'react';

const Home = () => {

const [count, setCount] = useState(0)

return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <nav> This is a NavBar </nav>
      <h1> Welcome to the Opera House! </h1>
      <h2> Slider </h2>
    </div>
  );
}

export default Home
