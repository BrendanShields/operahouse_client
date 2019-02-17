import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  categories.map((cat) => {
    console.log(cat.genre.replace(/ /g, "_"));
  })

  
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

    </div>
  )
};

export default Categories;
