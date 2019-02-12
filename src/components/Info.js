import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Info(props) {
    // State
    // Creates a filtered URL from the current url to find the current EVENT NAME
    const name = props.match.params.name.replace(/_/g, ' ');
    console.warn(name);

    return (

        <h2>hello</h2>
    );
}

export default Info;