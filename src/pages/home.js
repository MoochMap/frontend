import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../UI/Nav';
import { Button, Form, Navbar } from 'react-bootstrap'
import { apiGet } from '../api.js';
import Event from './event';
import '../css/events.css';
import { GoogleMap, Marker, withScriptjs, withGoogleMap} from "react-google-maps"
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import _ from "lodash";
import { compose, withProps } from "recompose";





class home extends Component {

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

  eventClick = (e) => {
    console.log(e.target);
    console.log("test");
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
    const {username} = this.state;
    var address;
    const Map = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
    )(props => (
      <div>
      <GoogleMap defaultZoom={16} defaultCenter={{ lat: 40.4259, lng: -86.9081 }}>
          <div>
          <Marker position={{lat: 40.4277, lng: -86.9169}}
      labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}>
          </Marker>
          </div>
      </GoogleMap>
      </div>
    ));
    console.log(following);
    return (
      <div>
        <Nav onClick={this.navclick}/>


        <h1>Your Upcoming Events</h1>
        <div className="card-holder">
          {events.sort((a,b) => new Date(a.date) > new Date(b.date)).map(function(event) {
            return <Event onClick={this.eventClick} home={1} username={username} name={event.name} type={event.type}
            location={event.location} locdesc={event.locdesc} date={event.date} time={event.time}
            creator={event.creator} following={following}/>
          }.bind(this)) }
        </div>

        {events.sort((a,b) => new Date(a.date) > new Date(b.date)).map(function(event) {
              address = event.location;
              return;
        })}

        <br/><br/><br/><br/><br/><br/><br/><br/>

        <h1>Next Event</h1>
        <br/>
        <Map />
      </div>
    );
  };

  static contextTypes = {
    router: PropTypes.object
  }
}

export default home;
