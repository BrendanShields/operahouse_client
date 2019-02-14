import React from 'react';
import Login from './Login';
import SignUp from './SignUp'
import './css/menu.scss';
import Slider from './Slider'

const Home = () => {

  return (
    <div>
      <div id="header">
        <div role="navigation" className="div-item">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">

              <a href="/events">
                <li>Events</li>
              </a>

              <a href="/events/categories">
                <li>Categories</li>
              </a>

            </ul>
          </div>
        </div>
      </div>

      <div class="title">
        <p class='opera'>
          <span>
            OPERA HOUSE
          </span>
          multi venue performing arts centre
         </p>
      </div>

      <div className="Slider">
        < Slider />
      </div>

    </div>


  );
}

export default Home
