import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './info.css'
import Dance from './images/dance.jpg';


function Info(props) {
    // State
    // Creates a filtered URL from the current url to find the current EVENT NAME
    const name = props.match.params.name.replace(/_/g, ' ');
    const genre = props.match.params.genre.replace(/_/g, ' ');
    // console.warn(name);

    const [events, setEvent] = useState([]);

    // Hook for Axios to retrieve data.
    useEffect(() => {
        getDataFromApi();
    }, [])
    const getDataFromApi = async () => {
        const response = await axios
            .get(`http://localhost:3000/events.json`);
        setEvent(response.data)
    }

    return (
      <div class="container">
      <div class="left-page">
          <span class="date">19th January 2019</span>
          <span class="cat"><Link to={'/events/' + genre + '/' + name + '/booking'}>Book Ticket</Link></span>
          <h1 class="title">{name} <span>{name}</span></h1>
          <span class="author">Opera House</span>
     </div>
        <div class="right-page">
          <p><h1> {name} </h1> <hr /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
      </div>
      </div>
    );
}

export default Info;
