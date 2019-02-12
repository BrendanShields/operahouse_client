import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './categories.css'


function Categories() {

  const [categories, setCat] = useState([]);

  // Hook for Axios to retrieve data.
  useEffect(() => {
    getDataFromApi();
  }, [])
  const getDataFromApi = async () => {
    const response = await axios
      .get(`http://localhost:3000/categories.json`);
    setCat(response.data)
  }

  return (
    <div>
      <div className="cat-list">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) =>
            <li className="grid-item"><Link to={'/events/' + category.genre.replace(/ /g, '_')}>{category.genre}</Link></li>)}
        </ul>
      </div>
    </div>
  )
};

export default Categories;
