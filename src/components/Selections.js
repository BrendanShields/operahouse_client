import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import './css/selections.scss'

function Selections() {

    return (
        <div>
            <Nav />
            <div className="selection">

                <div className="message">
                    Sorry, your browser does not support CSS Grid. 😅
            </div>

                <section className="section" />
                <div className="grid">

                    <div className="item">
                        <Link to="/events/categories/opera/werther">
                            <div className="item__details">
                                Werther
                            </div>
                        </Link>
                    </div>

                    <div className="item item--large">
                        <Link to="/events/categories/Classical_Music/Bartók's_Concerto_for_Orchestra">
                            <div className="item__details">
                                Bartók's Concerto for Orchestra
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Kids_&_Families/360_ALLSTARS">
                            <div className="item__details">
                                360 ALLSTARS
                            </div>
                        </Link>
                    </div>

                    <div className="item item--large">
                        <Link to="/events/categories/Dance/Verve">
                            <div className="item__details">
                                Verve
                            </div>
                        </Link>
                    </div>

                    <div className="item item--full">
                        <Link to="/events/categories/Cabaret/Blanc_de_Blanc_Encore">
                            <div className="item__details">
                                Blanc de Blanc Encore
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Circus_&_Magic/À_Ố_Làng_Phố">
                            <div className="item__details">
                                À Ố Làng Phố
                            </div>
                        </Link>
                    </div>

                    <div className="item item--large">
                        <Link to="/events/categories/Contemporary_Music/Lennon:_Through_A_Glass_Onion">
                            <div className="item__details">
                                Lennon: Through A Glass Onion
                            </div>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/events/categories/Comedy/Lano_&_Woodley:_FLY">
                            <div className="item__details">
                                Lano & Woodley: FLY
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Film/Casino_Royale_in_Concert">
                            <div className="item__details">
                                Casino Royale in Concert
                            </div>
                        </Link>
                    </div>

                    <div className="item item--large">
                        <Link to="/events/categories/Musical_Theatre/At_Last_‘The_Etta_James_Story’_with_Vika_Bull">
                            <div className="item__details">
                                At Last ‘The Etta James Story’ with Vika Bull
                            </div>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/events/categories/Talks_&_Ideas/Dr._Jordan_B._Peterson">
                            <div className="item__details">
                                Dr. Jordan B. Peterson
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Theatre/How_to_Rule_the_World">
                            <div className="item__details">
                                How to Rule the World
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Classical_Music/Jazz_at_Lincoln_Center_Orchestra_with_Wynton_Marsalis">
                            <div className="item__details">
                                Jazz at Lincoln Center Orchestra with Wynton Marsalis
                            </div>
                        </Link>
                    </div>

                    <div className="item item--large">
                        <Link to="/events/categories/Classical_Music/The_Music_of_Count_Basie_and_Duke_Ellington">
                            <div className="item__details">
                                The Music of Count Basie and Duke Ellington
                            </div>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/events/categories/Classical_Music/Scottish_Fantasy">
                            <div className="item__details">
                                Scottish Fantasy
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Classical_Music/Barry_Douglas_performs_Brahms">
                            <div className="item__details">
                                Barry Douglas performs Brahms
                            </div>
                        </Link>
                    </div>

                    <div className="item item--medium">
                        <Link to="/events/categories/Theatre/Faulty_Towers_The_Dining_Experience">
                            <div className="item__details">
                                Faulty Towers The Dining Experience
                            </div>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/events/categories/Theatre/Mosquitoes">
                            <div className="item__details">
                                Mosquitoes
                            </div>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/events/categories/Classical_Music/Wonder">
                            <div className="item__details">
                                Wonder
                            </div>
                        </Link>
                    </div>

                    <div className="item">
                        <Link to="/events/categories/Opera/Wozzeck">
                            <div className="item__details">
                                Wozzeck
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Selections;

