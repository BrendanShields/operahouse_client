import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./css/categories.css";

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
      <ul>
        {names.map((name) =>
          <li className="grid-item"><Link to={'/events/' + props.match.params.genre + '/' + name.replace(/ /g, '_')}>{name}</Link></li>)}
      </ul>
    </div>
  );

}


export default Events;
