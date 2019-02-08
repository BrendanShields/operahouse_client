
import React, { useState, Component } from 'react';
import Slider from './Slider'

const Home = () => {
const [count, setCount] = useState(0)

return (
    <div>
      < Slider />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Home
