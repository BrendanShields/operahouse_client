import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./css/categories.css";
import './css/events.scss'
import Nav from './Nav';

function Events(props) {
  // State
  // Creates a filtered URL from the current url to find the current GENRE
  const genre = props.match.params.genre.replace(/_/g, ' ');

  const [category, setCat] = useState([]);
  const [event, setEvent] = useState([]);
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
  let eventSpaces = [];
  let images = [];
  let subtitles = [];
  let shortDescs = [];

  return (
    <div>
      <Nav />

      <div className="events">

        {category.filter((cat) => {
          if (genre === cat.genre) {
            const id = cat.id

            event.filter((event) => {
              if (id === event.category_id) {
                const eveSpace = event.event_space_id;
                names.push(event.name);
                durations.push(event.duration);
                dates.push(event.date);
                images.push(event.image);
                subtitles.push(event.subtitle);
                shortDescs.push(event.short_desc);
                
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
        <ul className="info">
          {names.map((name, index) =>
            <li>
              <div className="blog-card">
                <div className="meta">
                  <div className="photo" style={{backgroundImage: `url(/images/${images[index]})` }}></div>
                  
                  <ul className="details">
                    {dates[index] ? (
                      <div>
                        <li className="date">{dates[index]}</li>
                        <li className="duration">Duration: {durations[index]} min </li>
                        <li className="location">{eventSpaces[index]}</li>
                      </div>
                    ) : (
                        <li><h4>Coming soon</h4></li>
                      )}
                  </ul>

                </div>
                <div className="description">
                  <h1>{name}</h1>
                  <h2>{subtitles[index]}</h2>
                  <p>{shortDescs[index]}</p>
                  <p className="read-more">
                    {dates[index] 
                        ?
                        <Link to={'/events/categories' + '/' + props.match.params.genre + '/' + name.replace(/ /g, '_')}>Read More</Link>
                        :
                        <div></div>
                  }
                  </p>

                </div>
              </div>
            </li>

          )}

        </ul>
      </div>
      
    </div>
  );

}


export default Events;
