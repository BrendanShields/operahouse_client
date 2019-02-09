
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Events from './components/Events';

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/categories",
        component: Categories,
        routes: [
            {
                path: "/events/:genre",
                component: Events
            }
        ]
    }
];

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

const Routes = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <OldMenuLink activeOnlyWhenExact={true} to="/home" label="Home" />
                </li>
                <li>
                    <OldMenuLink to="/categories" label="Categories" />
                </li>
            </ul>
            <hr />
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>
);

const OldMenuLink = ({ label, to, activeOnlyWhenExact }) => (
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
