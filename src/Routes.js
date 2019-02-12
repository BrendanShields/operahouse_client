import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Events from './components/Events';
import Info from './components/Info';

const Routes = () => (
    <Router class="navbar">
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/events" component={Categories}/>
            <Route exact path="/events/:genre" component={Events}/>
            <Route exact path="/events/:genre/:name" component={Info}/>
        </div>
    </Router>
);

export default Routes;
