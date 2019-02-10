
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Events from './components/Events';

const Routes = () => (
    <Router class="navbar">
        <div>
            <MenuLink activeOnlyWhenExact={true} to="/" label="Home" />
            <MenuLink to="/events" label="Events" />
            <hr />
            <Route exact path="/" component={Home}/>
            <Route exact path="/events" component={Categories}/>
            <Route path="/events/:genre" component={Events}/>
        </div>
    </Router>
);

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
            <div className={match ? "active" : ""}>
                {match ? "> " : ""}
                <Link to={to}>{label}</Link>
            </div>
        )}
    />
);

export default Routes;
