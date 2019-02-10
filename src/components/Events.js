import React, { useState, Component } from 'react';
import axios from 'axios';

const EVENTS_URL = "http://localhost:3000/events.json";
const CATEGORIES_URL = "http://localhost:3000/categories.json";
const EVENT_SPACES_URL = "http://localhost:3000/event_spaces.json";

const urlMatchToGenre = {
    dance: 'Dance',
    opera: 'Opera',
    'classical-music': 'Classical Music',
    'kids-and-families': 'Kids & Families'
}

class Events extends Component {
    constructor() {
        super();

        this.state = {
            name: [],
            date: [],
            duration: [],
        };

        const fetchEvent = () => {
            axios.get(CATEGORIES_URL).then((results) => {
                // console.log('results:', results);
                const outcome = results.data.filter((event) => {
                    if (event.genre === urlMatchToGenre[this.props.match.params.genre]) {
                        return event;
                    }
                });

                const cat_id = outcome.map((event) => event.id)[0];
                // console.log("category_id", cat_id);

                axios.get(EVENTS_URL).then((results) => {
                    // console.log("results for events:", results);
                    const outcome = results.data.filter((event) => {
                        if (event.category_id === cat_id) {
                            return event;
                        }
                    });

                    const space_id = outcome.map((event) => event.event_space_id);
                    // console.log(space_id)

                    this.setState({
                        name: outcome.map((event) => event.name),
                        date: outcome.map((event) => event.date),
                        duration: outcome.map((event) => event.duration),
                    })
                });
            });
        }

        fetchEvent();
    }

    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <h4>Date: {this.state.date}</h4>
                <p>Duration: {this.state.duration} minutes</p>
            </div >
        );
    }
}

export default Events;