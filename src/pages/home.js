import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UI/Nav';
import { Button, Form, Navbar } from 'react-bootstrap'
import { apiGet } from '../api.js';

import '../css/events.css';

class home extends Component {
  constructor(props) {
    super(props);

    this.state = { events: null };
  }


  componentWillMount () {
    apiGet('/getevents').then((data) => {
      console.log("test");
      if (data.success) {
        this.setState ({events: data.message});

      } else {
        sessionStorage.setItem('error', data.message);
        console.log(data);
      }
    });
  }

  navclick = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'logout') {
      sessionStorage.removeItem('token');
      this.context.router.history.push('/login');
    }
    if (e.target.id === 'home') {
      this.context.router.history.push('/home');
    }
    if (e.target.id === 'events') {
      this.context.router.history.push('/events');
    }
  }
  render(){
    return (
      <div>
        <Nav onClick={this.navclick}/>
        {this.state.events}<br/>
      </div>
    );
  };

  static contextTypes = {
    router: PropTypes.object
  }
}

export default home;
