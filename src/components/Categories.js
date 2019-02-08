import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Categories = () => (
    <div>
        <h2>Categories</h2>
        <ul>
            <li>
                <Link to="/events/dance">Dance</Link>
            </li>
            <li>
                <Link to="/events/opera">Opera</Link>
            </li>
            <li>
                <Link to="/events/classical-music">Classical Music</Link>
            </li>
            <li>
                <Link to="/events/kids-and-families">Kids & Families</Link>
            </li>
            
        </ul>

    </div >
);


export default Categories;
