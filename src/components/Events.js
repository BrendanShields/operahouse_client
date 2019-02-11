import React, { useState, useEffect, Component } from 'react';
import Search from './Search'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';


function Events() {

    const [categories, setCat] = useState([]);
    const [events, setEvents] = useState([]);

    // Hook for Axios to retrieve data.
    useEffect(() => {
        getDataFromApi();
    }, [])
    const getDataFromApi = async () => {
        const response = await axios
            .get(`http://localhost:3000/categories.json`);
        setCat(response.data);
    }

    const findCatId = () => {
        const id = categories.filter((cat) => {
          if (cat.id === ) {
            setResult(prop);
          }
        });
      };

    return (
        <div>
            <div className="events">
                <h2>hello</h2>
            </div>
        </div>
    );
}


export default Events;
