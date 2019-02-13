import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Events from './components/Events';
import Info from './components/Info';
import Seats from './components/Seats';
import Login from './components/Login'

const Routes = () => (
    <Router class="navbar">
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/events" component={Categories}/>
            <Route exact path="/events/:genre" component={Events}/>
            <Route exact path="/events/:genre/:name" component={Info}/>
            <Route exact path="/events/:genre/:name/booking" component={Seats}/>
        </div>
    </Router>
);

export default Routes;
