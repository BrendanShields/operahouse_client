import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/info.scss'
import Dance from './images/dance.jpg';


function Info(props) {
    // State
    // Creates a filtered URL from the current url to find the current EVENT NAME
    const name = props.match.params.name.replace(/_/g, ' ');
    // console.warn(name);

    return (
        <div className="info">
            <h2>{name}</h2>
            <div className="blog-card">
                <div className="meta">
                    <div className="photo" style={{ background: `url( ${Dance} )` }}></div>

                    <ul className="details">
                        <li className="date">Aug. 24, 2015</li>
                        <li className="tags">
                            <ul>
                                <li><Link to={'#'}>Location</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>
                <div className="description">
                    <h1>Learning to Code</h1>
                    <h2>Opening a door to the future</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                    <p className="read-more">
                        <Link to={"#"}>Booking</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
