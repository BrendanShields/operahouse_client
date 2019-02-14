import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { useSpring, animated } from 'react-spring';
// import range from 'lodash-es/range'
import Login from './Login'
import axios from 'axios'
import './css/categories.css'
import Nav from './Nav';


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

  // const items = range(categories.length);

  // const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

  // const { radians } = useSpring({
  //   to: async next => {
  //     while (1) await next ({ radians: 2 * Math.PI })
  //   }, 
  //   from: { radians: 0 },
  //   config: { duration: 3500 },
  //   reset: false,
  // })

  return (
    <div>
      <Nav />
      <div className="categories">

        {/* {items.map(i => <animated.div key={i} className="script-bf-box" style={{ transform: radians.interpolate(interp(i)) }} /> )} */}

        <ul>
          {categories.map((category) =>
            <li className="grid-item"><Link to={'/events/categories' + '/' + category.genre.replace(/ /g, "_")}><p className="text">{category.genre}</p></Link></li>)}
        </ul>

      </div>

    </div>
  )
};

export default Categories;
