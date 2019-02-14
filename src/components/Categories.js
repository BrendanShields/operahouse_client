import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login'
import axios from 'axios'
import './css/categories.css'
import Nav from './Nav';


function Categories() {
  // State
//------------------------------------------------------------------------------
//     **Hooks**
//------------------------------------------------------------------------------
/* | ARR OF CATEGORIES | */  const [categories, setCat] = useState([]);
//------------------------------------------------------------------------------
// AXIOS FUNCTIONS
//------------------------------------------------------------------------------
// ** Categories **
  useEffect(() => {
    getDataFromApi();
  }, [])
  const getDataFromApi = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/categories.json`);
    setCat(response.data)
  }
//------------------------------------------------------------------------------
  return (
    <div>
      <Nav />
      <div className="categories">

        <ul>
          {categories.map((category) =>
            <li className="grid-item"><Link to={'/events/categories' + '/' + category.genre.replace(/ /g, "_")}><p className="text">{category.genre}</p></Link></li>)}
        </ul>

      </div>

      <br>
      </br>
      <br>
      </br>

    </div>
  )
};

export default Categories;
