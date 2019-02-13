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
  const [spaces, setSpace] = useState([]);

  useEffect(() => {
    getDataFromEvent();
  }, [])
  const getDataFromEvent = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/events.json`);
    setEvent(response.data)
  }

  useEffect(() => {
    getDataFromCat();
  }, [])
  const getDataFromCat = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/categories.json`);
    setCat(response.data)
  }

  useEffect(() => {
    getDataFromSpace();
  }, [])
    const getDataFromSpace = async () => {
      const response = await axios
        .get(`http://localhost:3000/event_spaces.json`);
      setSpace(response.data);
    }
  
  let names = [];
  let dates = [];
  let locations = [];

  return (
    <div className="background">

      {category.filter((cat) => {
        if (genre === cat.genre) {
          const id = cat.id
          event.filter((event) => {
            if (id === event.category_id) {
              console.log(event.name);
              names.push(event.name);
              dates.push(event.date);
              const spId = event.event_space_id
              locations.filter((loc) => {
                if (spId === loc.id) {
                  
                  locations.push(loc.name);
                }
              })
            }
          })
        }
      })
      }

      <ul className="info">
        {names.map((name) =>
          dates.map((date) =>
            spaces.map((space) =>
              <li>
                <div className="blog-card">
                  <div className="meta">
                    <div className="photo" style={{ background: `url( ${Dance} )` }}></div>

                    <ul className="details">

                      <li class="date">{date}</li>
                      <li class="tags">
                        <ul>
                          <li><a onClick='hello'>Location</a></li>
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
              </li>
            )
          )
        )}
      </ul>
    </div>
  );

}


export default Events;
