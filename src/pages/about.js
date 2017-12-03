import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { apiPost } from '../api.js';
import Nav from '../UI/Nav';
import '../css/about.css'
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'

class about extends Component {

  render (){
    return (
      <div class="about">
        <br/><br/>
        <center>
        <h2> About Mooch Map </h2>
        <p>
        Mooch Map is a website designed to help College Students eat as affordably as possible. How do we accomplish that?
        Its simple. Whenever a student hears about an event/callout that is offering free food they can post it on Mooch Map
        to spread the information. Mooch Map helps to provide exposure for clubs/events while also feeding poor College Students, its a win-win.
        </p>
        <Link to="/signup"><Button bsStyle="info">Signup</Button></Link>
        <br/><br/><br/>
        Already have an account?
        <br/>
        <Link to="/login"><Button bsStyle="success">Login</Button></Link>
        </center>
      </div>
    );
  }
}


export default about;
