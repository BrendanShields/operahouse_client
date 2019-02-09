import React, { useState, Component } from 'react';


const Events = ({ match }) => {
    return (
        <div>
            <h2>{match.params.genre}</h2>
        </div>

    );
}

export default Events;