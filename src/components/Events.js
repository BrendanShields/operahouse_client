import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./css/categories.css";
import './css/info.scss'
import Dance from './images/dance.jpg';

function Events(props) {
  // State
  // Creates a filtered URL from the current url to find the current GENRE
  const genre = props.match.params.genre.replace(/_/g, ' ');


  const [category, setCat] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getDataFromEvent();
  }, [])
  const getDataFromEvent = async () => {
    const response = await axios
      .get(`http://localhost:3000/events.json`);
    setEvent(response.data)
  }

  useEffect(() => {
    getDataFromCat();
  }, [])
  const getDataFromCat = async () => {
    const response = await axios
      .get(`http://localhost:3000/categories.json`);
    setCat(response.data)
  }
  let names = [];

  return (
    <div>

      {category.filter((cat) => {
        if (genre === cat.genre) {
          const id = cat.id
          event.filter((event) => {
            if (event.category_id === id) {
              names.push(event.name);
            }
          })
        }
      })
      }
      <ul className="info">
        {names.map((name) =>
          <li>
            <div className="blog-card">
              <div className="meta">
                <div className="photo" style={{ background: `url( ${Dance} )` }}></div>

                <ul className="details">
                  <li class="date">Aug 25 2019</li>
                  <li class="tags">
                    <ul>
                      <li><Link to="/">Location</Link></li>
                    </ul>
                  </li>
                </ul>

              </div>
              <div className="description">
                <h1>{name}</h1>
                <h2>Opening a door to the future</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p className="read-more">
                  <Link to={'/events/' + props.match.params.genre + '/' + name.replace(/ /g, '_')}>Read More</Link>
                </p>
              </div>
            </div>
          </li>)}
      </ul>
    </div>
  );

}


export default Events;
