import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Categories = () => (
    <div>
        <h2>Categories</h2>
        <ul>
            <li>
                <Link to="/events/drama">Drama</Link>
            </li>
            <li>
                <Link to="/events/comics">Comics</Link>
            </li>
            
        </ul>

    </div >
);


export default Categories;