import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios'
import './seats.css'
function Seats(props) {

  const name = props.match.params.name.replace(/_/g, ' ');

  // // Hook for seats
  // [seats, setSeats] = useState([])

  // // Hook for Axios to retrieve data.
  // useEffect(() => {
  //   getDataFromApi();
  // }, [])
  // // Function that returns data to seats
  // const getDataFromApi = async () => {
  //   const response = await axios
  //     .get(`http://localhost:3000/seats.json`);
  //   setSeats(response.data)
  // }

//// spaces & events ////////////////////////////////////////////////////////////
  const [spaces, setSpaces] = useState([]);
  const [events, setEvent] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, [])

  const getDataFromApi = async () => {
    const response = await axios
       .get(`http://localhost:3000/event_spaces.json`);
       setSpaces (response.data)
  }

  useEffect(() => {
    getDataFromEvent();
  }, [])
  const getDataFromEvent = async () => {
    const response = await axios
      .get(`http://localhost:3000/events.json`);
    setEvent(response.data)
  }

  ///////////////////////////////////////////////////


  return (
    <div className="background">
      <h2></h2>
      <p>Hello</p>
    </div>
  )
}

export default Seats;
