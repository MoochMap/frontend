import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UI/Nav';
import { Button, Form, Navbar, FormGroup, FormControl } from 'react-bootstrap'
import { apiGet } from '../api.js';
import '../css/create.css';
import { apiPost } from '../api.js';
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete'

import '../css/events.css';

class create extends Component {

  constructor(props) {
    super(props);

    this.state = { apiError: null };
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
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


  create = () => {
    const credentials = {
      name: this.state.name,
      type: this.state.type,
      description: this.state.description,
      location: this.state.address,
      locdesc: this.state.location,
      date: this.state.date,
      time: this.state.time
    }

    apiPost('/createevent', credentials).then((data) => {
      if (data.success) {
        this.context.router.history.push('/events');
      } else {
        this.setState({ apiError: data.message})
        sessionStorage.setItem('hey', data.message )
      }
    });
  }

  name = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  description = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  type = (e) => {
    this.setState({
      type: e.target.value
    })
  }
  location = (e) => {
    this.setState({
      location: e.target.value
    })
  }
  date = (e) => {
    this.setState({
      date: e.target.value
    })
  }
  time = (e) => {
    this.setState({
      time: e.target.value
    })
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
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div>
        <Nav onClick={this.navclick}/>
        <div class="create-form">
          <FormGroup bsSize="small">
            {this.state.apiError}
            <br/>Event Info<br/>
            <FormControl type="name" placeholder="Event Name" onChange={this.name} className="margin-top"/>
            <FormControl type="description" placeholder="Description" onChange={this.description} className="margin-top"/>

            <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>

            <br/>Location<br/>
            <div id="locationField">
              <PlacesAutocomplete inputProps={inputProps} />
            </div>
            <FormControl type="location-description" placeholder="Room/Apt #" onChange={this.location} className="margin-top"/>


            <select type="type" onChange={this.type} className="margin-top select">
              <option value="" selected disabled hidden>What Kind of Food?</option>
              <option value="Chipotle">Chipotle</option>
              <option value="Mad Mushroom">Mad Mushroom</option>
              <option value="Moes">Moes</option>
              <option value="Panera">Panera</option>
              <option value="Potbelly">Potbelly</option>
              <option value="Subway">Subway</option>
              <option value="Qdoba">Qdoba</option>
              <option value="Other">Other</option>
            </select>
            <br/><br/>
            <br/>Date & Time<br/>
            <FormControl type="datetime-local" placeholder="Starting Date" onChange={this.date} />
          </FormGroup>
          <Button bsStyle="success" onClick={ this.create }>Create</Button>
        </div>
      </div>
    );
  };

  static contextTypes = {
    router: PropTypes.object
  }
}

export default create;
