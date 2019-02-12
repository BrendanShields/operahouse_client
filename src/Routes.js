import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Events from './components/Events';
import Info from './components/Info';

const Routes = () => (
    <Router class="navbar">
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/events" component={Categories}/>
            <Route path="/events/:genre" component={Events}/>
            <Route path="/events/:genre/:name" component={Info}/>
        </div>
    </Router>
);

export default Routes;
