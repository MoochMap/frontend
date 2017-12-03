import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UI/Nav';
import { Button, Form, Navbar, FormGroup, FormControl } from 'react-bootstrap'
import { apiGet } from '../api.js';

import '../css/events.css';

class create extends Component {
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
        <FormGroup bsSize="small">
          <FormControl type="name" placeholder="Event Name" onChange={this.name} />
          <FormControl type="description" placeholder="Description" onChange={this.description}/>
          <FormControl type="location" placeholder="Location" onChange={this.location} />
          <FormControl type="date" placeholder="Date" onChange={this.date} />
          <FormControl type="time" placeholder="Date" onChange={this.time} />
        </FormGroup>

      </div>
    );
  };

  static contextTypes = {
    router: PropTypes.object
  }
}

export default create;
