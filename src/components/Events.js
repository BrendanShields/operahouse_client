
import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import "./categories.css"





function Events() {
// State

// Creates a filtered URL from the current url to find the current GENRE
let url = window.location.href
url = url.replace('http://localhost:3001/events/', '')
url = url.replace('%20', ' ')
url = url.replace('%20', ' ')
console.log(url)


const [category, setCat] = useState([]);
const [event, setEvent] = useState([]);
const [cat_id, setID] = useState(null)

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
    let names = []
        return (
          <div>
          <h1>{category.filter((cat) => {
                if (url === cat.genre) {
                const id = cat.id
                  event.filter((event) => {
                    if (event.category_id === id){
                     names.push(event.name)
                    }
                  })
                }
              })
            } <div className="grid-item">{names}</div></h1>
          </div>
        );
    }

export default Events;
