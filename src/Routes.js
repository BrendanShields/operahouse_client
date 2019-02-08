import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Events from './components/Events';


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/categories",
        component: Categories,
        routes: [
            {
                path: "/categories/:genre",
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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>

            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>
);

export default Routes;