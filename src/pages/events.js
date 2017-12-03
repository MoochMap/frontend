import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UI/Nav';
import { apiPost } from '../api.js';
import { Button, Form, Navbar, Row, Thumbnail} from 'react-bootstrap'
import { apiGet } from '../api.js';
import '../css/events.css';
import Event from './event';

import '../css/events.css';

class events extends Component {

  constructor(props) {
    super(props);

    this.state = { events: [{}], following:[{}], username: {} };
  }


  componentWillMount () {
    apiGet('/getevents').then((data) => {
      if (data.success) {
        this.setState ({events: data.events});
      } else {
        sessionStorage.setItem('error', data.message);
      }
    });
    apiGet('/getuser').then((data) => {
      if (data.success) {
        this.setState ({username: data.username});
        this.setState ({following: data.following});
      } else {
        sessionStorage.setItem('error', data.message);
      }
    });
  }


   follow = (e) => {
    apiPost('/followevent', e.target.value).then((response) => {
      if (response.success) {
        this.context.router.history.push('/events');
      } else {
        this.setState({ apiError: response.message });
        sessionStorage.setItem('hey', response.message );
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
    const {events} = this.state;
    const {following} = this.state;
    const username = this.state.username;
    console.log(following);
    return (
      <div>
        <Nav onClick={this.navclick}/>
        <h1>Upcoming Events</h1>
        <div id="card-holder">
          { events.map(function(event) {
            return <Event home={0} username={username} name={event.name} type={event.type} location={event.location} date={event.date} time={event.time} creator={event.creator} following={following}/>
          }) }
        </div>
      </div>
    );
  };

  static contextTypes = {
    router: PropTypes.object
  }
}

export default events;
