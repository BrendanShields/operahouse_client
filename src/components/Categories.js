import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSpring, animated  } from 'react-spring';
import Login from './Login'
import axios from 'axios'
import './css/categories.css'


function Categories() {
// State

  const [categories, setCat] = useState([]);

  // Hook for Axios to retrieve data.
  useEffect(() => {
    getDataFromApi();
  }, [])
  const getDataFromApi = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/categories.json`);
    setCat(response.data)
  }
const props = useSpring({ opacity: 1, from: { opacity: 0, } })
  return (

    <animated.div style={props}>
    <div className="background">
      <div className="cat-list">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) =>
            <li className="grid-item"><Link to={'/events/' + category.genre.replace(/ /g, "_")}>{category.genre}</Link></li>)}
        </ul>
      </div>
    </div>
    </animated.div>
  )
};

export default Categories;
