import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import Login from './Login'

function Categories() {

  const [results, setResults] = useState([]);
  useEffect(() => {
     getDataFromApi();
   },[])

    const getDataFromApi = async () => {
     const response = await axios
       .get(`http://localhost:3000/categories.json`);
     setResults(response.data)
   }

   console.log(results)
return(
    <div>
    < Login />
    {results.map((category) =>
      category.genre )}

        <h2>categories</h2>
        <ul>
            <li>
                <Link to="/events/dance">Dance</Link>
            </li>
            <li>
                <Link to="/events/opera">Opera</Link>
            </li>
            <li>
                <Link to="/events/classical-music">Classical Music</Link>
            </li>
            <li>
                <Link to="/events/kids-and-families">Kids & Families</Link>
            </li>
        </ul>

    </div >


)};


export default Categories;
