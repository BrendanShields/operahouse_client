import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Slider from './components/Slider';
import Comics  from './components/Comics';


////////////////////////////////////////////////////////////
// then our route config
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
                path: "/categories/slider",
                component: Slider
            },
            {
                path: "/categories/comics",
                component: Comics
            }
        ]
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
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