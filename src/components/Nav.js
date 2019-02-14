import React, { useState } from 'react';
import './css/nav.scss';
import Logo from './images/logo.png'
import Login from './Login'
import SignUp from './SignUp'
import axios from 'axios'

function Nav() {


    // User Authentication
    const header = { "headers": { "Authorization": localStorage.Authorization } }
    const [currentUser, setCurrentUser] = useState(false)
    const [message, setMessage] = useState('')
    const checkAuthOfApi = async (req, res) => {
        const response = await axios
            .get("http://localhost:3000/auth", req)
        // If response, populate api hook with Auth token and format
        console.log(response.data)
        setMessage(response.data.msg)
        setCurrentUser(response.data.user_id)

    }
    checkAuthOfApi(header)
    return (
        <div>
            <nav>
                <div className="one">
                    <a href="/" className="navLinks"><img src={Logo} /></a>
                </div>

                <div className="two">
                    <ul className="menu">
                        <li><a href="/events" className="navLinks">Events</a></li>
                    </ul>
                </div>

                <div className="logo">
                    <div className="pageTitle">
                        <p className='operaHouse'>
                            <span>
                                OPERA HOUSE
                            </span>
                        </p>
                    </div>
                </div>

                <div className="three">
                    <ul className="menu">
                        <li><a href="/events/categories" className="navLinks">Categories</a></li>
                    </ul>

                </div>

                <div className="four">
                    <div role="login" className="div-item-nav">
                        <div id="navToggle">
                            <input type="checkbox" />

                            <span></span>
                            <span></span>
                            <span></span>

                            <div id="login">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Nav;
