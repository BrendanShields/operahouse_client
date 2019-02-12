import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './css/info.scss'
import Dance from './images/dance.jpg';


function Info(props) {
    // State
    // Creates a filtered URL from the current url to find the current EVENT NAME
    const name = props.match.params.name.replace(/_/g, ' ');
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
        <div className="info">
            <h2>{name}</h2>
            <img src={Dance} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
            <button>Book Ticket</button>
        </div>
    );
}

export default Info;
