import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import './css/selections.scss'

function Selections() {
    const [events, setEvent] = useState([]);

    useEffect(() => {
        getDataFromEvent();
    }, []);
    const getDataFromEvent = async () => {
        const response = await axios
            .get(`https://operahouse-server.herokuapp.com/events.json`);
        setEvent(response.data);
    }

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
                        <div className="item__details">
                            jelly-o brownie sweet
                        </div>
                    </div>

                    <div className="item item--large">
                        <div className="item__details">
                            Muffin jelly gingerbread
                        </div>
                    </div>

                    <div className="item item--medium">
                        <div className="item__details">
                            sesame snaps chocolate
                        </div>
                    </div>

                    <div className="item item--large">
                        <div className="item__details">
                            Oat cake
                        </div>
                    </div>

                    <div className="item item--full">
                        <div className="item__details">
                            jujubes cheesecake
                        </div>
                    </div>

                    <div className="item item--medium">
                        <div className="item__details">
                            Dragée pudding brownie
                        </div>
                    </div>

                    <div className="item item--large">
                        <div className="item__details">
                            Oat cake
                        </div>
                    </div>

                    <div className="item">
                        <div className="item__details">
                            powder toffee
                         </div>
                    </div>

                    <div className="item item--medium">
                        <div className="item__details">
                            pudding cheesecake
                        </div>
                    </div>

                    <div className="item item--large">
                        <div className="item__details">
                            toffee bear claw
                        </div>
                    </div>

                    <div className="item">
                        <div className="item__details">
                            cake cookie croissant
                        </div>
                    </div>

                    <div className="item item--medium">
                        <div className="item__details">
                            liquorice sweet roll
                        </div>
                    </div>

                    <div className="item item--medium">
                        <div className="item__details">
                            chocolate marzipan
                        </div>
                    </div>

                    <div className="item item--large">
                        <div className="item__details">
                            danish dessert lollipop
                        </div>
                    </div>

                    <div className="item">
                        <div className="item__details">
                            sugar plum dragée
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Selections;

