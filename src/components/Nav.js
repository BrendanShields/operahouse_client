import React from 'react';
import './css/nav.scss';
import Logo from './images/logo.png'

function Nav() {
    return (
        <div>

            <nav>
                <div className="one">
                    <a href="/" className="navLinks"><img src={Logo} /></a>
                </div>

                <div className="two">
                    
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
                    
                </div>

                <div className="four">
                    <ul className="menu">
                        <li><a href="/events/categories" className="navLinks">Categories</a></li>
                    </ul>
                    {/* <div className="search">
                        <div className="search-content">
                            <button className="search-button"><i className="fa fa-search"></i></button>
                            <input type="text" className="search-input" placeholder="Search here..." />
                        </div>
                    </div> */}
                </div>
            </nav>

        </div>
    );
}

export default Nav;