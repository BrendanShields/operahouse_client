import React, { useState } from 'react';
import './css/nav.scss';
// import Logo from './images/logo.png'
import Login from './Login'
import SignUp from './SignUp'
import axios from 'axios'
import Logo from './images/logo.png'


function Nav() {

//  **Format JSON**
//____________________________________________________________________________
  const header = {"headers": {"Authorization": localStorage.Authorization}}
//----------------------------------------------------------------------------
//     **Hooks**
//----------------------------------------------------------------------------
/* CURRENT USER */  const [currentUser, setCurrentUser] = useState(false)
/*LOGGED IN MSG */  const [message, setMessage] = useState('')
//----------------------------------------------------------------------------
// AXIOS FUNCTIONS
//----------------------------------------------------------------------------
// ** AUTHORIZATION **
  const checkAuthOfApi = async (req, res) => {
    if (!currentUser) {
   const response = await axios
       .get("https://operahouse-server.herokuapp.com/auth", req)
           setMessage(response.data.msg)
           setCurrentUser(response.data.user_id)
           }
        }
  checkAuthOfApi(header)
//----------------------------------------------------------------------------
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
                        <div id="test">

                            <span></span>
                            <span></span>
                            {currentUser === false ? (
                              <span>
                                < Login />
                              </span>
                            ) : (
                             <span>{message}</span>
                            )}


                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Nav;
