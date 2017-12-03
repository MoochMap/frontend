import React from 'react';
import PropTypes from 'prop-types';
import '../css/Nav.css';
import { isAuthenticated } from '../ARoute';
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../images/pangea.png'
import '../css/calendar.css'

const calendar = (data) => {
    var indents = [];
    for (var i = 0; i < 31; i++) {
      if (new Date().getDate() == i) {
        indents.push(<li><span class="active">{i}</span></li>);
      } else {
        indents.push(<li>{i}</li>);
      }
    }

    return(
      <div>
      <div class="calendar">
        <h1>Your Calendar</h1>
        <div class="month">
        <ul>
          <li class="prev">&#10094;</li>
          <li class="next">&#10095;</li>
          <li>
            {new Date().toLocaleString("en-us", { month: "long" })}<br/>
            2017
          </li>
        </ul>
        </div>

        <ul class="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
        </ul>

        <ul class="days">
        <li></li>
        <li></li>
        <li></li>
        {indents}

      </ul>
      </div>
      </div>
    )
}

export default calendar;
