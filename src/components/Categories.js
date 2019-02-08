import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Categories = ({ routes }) => (
    <div>
        <h2>Categories</h2>
        <ul>
            <li>
                <Link to="/categories/drama">Drama</Link>
            </li>
            <li>
                <Link to="/categories/comics">Comics</Link>
            </li>
            <li>
                <Link to="/categories/action">Action</Link>
            </li>
        </ul>

        { routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />) }
    </div >
);

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

export default Categories;