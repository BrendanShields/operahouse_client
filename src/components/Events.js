import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./css/categories.css";
import './css/events.scss'
import Dance from './images/dance.jpg';

function Events(props) {
  // State
  // Creates a filtered URL from the current url to find the current GENRE
  const genre = props.match.params.genre.replace(/_/g, ' ');


  const [category, setCat] = useState([]);
  const [event, setEvent] = useState([]);
  const [showings, setShows] = useState([]);
  const [spaces, setSpace] = useState([]);

  useEffect(() => {
    getDataFromCat();
  }, [])
  const getDataFromCat = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/categories.json`);
    setCat(response.data)
  }

  useEffect(() => {
    getDataFromEvent();
  }, [])
  const getDataFromEvent = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/events.json`);
    setEvent(response.data)
  }

  useEffect(() => {
    getDataFromShowings();
  }, [])
  const getDataFromShowings = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/showings.json`);
    setShows(response.data);
  }

  useEffect(() => {
    getDataFromEventSpace();
  }, []);
  const getDataFromEventSpace = async () => {
    const response = await axios
    .get('https://operahouse-server.herokuapp.com/event_spaces.json');
    setSpace(response.data);
  }


  let names = [];
  let durations = [];
  let dates = [];
  let times = [];
  let eventSpaces = [];


  return (
    <div className="background">

      {category.filter((cat) => {
        if (genre === cat.genre) {
          const id = cat.id

          event.filter((event) => {
            if (id === event.category_id) {
              const eventId = event.id;
              names.push(event.name);
              durations.push(event.duration);

              showings.filter((show) => {
                if (eventId === show.event_id) {
                  const eveSpace = show.event_space_id;
                  dates.push(show.date);
                  times.push(show.time);

                  spaces.filter((space) => {
                    if (eveSpace === space.id) {
                      eventSpaces.push(space.name);
                    }
                  })
                }
              })
            }
          })
        }
      })
      }

      <ul className="info">
        {names.map((name, index) =>
          <li>
            <div className="blog-card">
              <div className="meta">
                <div className="photo" style={{ background: `url( ${Dance} )` }}></div>

                <ul className="details">
                  <li className="date">{dates[index]}</li>
                  <li className="duration">Duration: {durations[index]} min </li>
                  <li className="location">{eventSpaces[index]}</li>
                </ul>

              </div>
              <div className="description">
                <h1>{name}</h1>
                <h2>Opening a door to the future</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                <p className="read-more">
                  <Link to={'/events/categories' + '/' + props.match.params.genre + '/' + name.replace(/ /g, '_')}>Read More</Link>
                </p>

              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );

}


export default Events;
