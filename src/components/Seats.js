import React, { useState, useEffect } from 'react';
import axios from 'axios';


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
  //     .get(`https://operahouse-server.herokuapp.com/seats.json`);
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
      .get(`https://operahouse-server.herokuapp.com/event_spaces.json`);
    setSpaces(response.data)

  }

  useEffect(() => {
    getDataFromEvent();
  }, [])
  const getDataFromEvent = async () => {
    const response = await axios
      .get(`https://operahouse-server.herokuapp.com/events.json`);
    setEvent(response.data)
  }

  ///////////////////////////////////////////////////
  const location = [];
  const capacity = [];
  return (
    <div>

      {events.filter((event) => {
        if (event.name = name) {
          const id = event.event_space_id;
          spaces.filter((space) => {
            if (space.id === id) {
              location.push(space.name);
              capacity.push(space.capacity);
            }
          })
        }
      })
      }
      <div className="seatInfo">

        <h2>hello</h2>
      </div>
    </div>
  );
}

export default Seats;
