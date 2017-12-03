import React from 'react';
import PropTypes from 'prop-types';
import '../css/Nav.css';
import '../css/events.css';
import { apiPost } from '../api.js';
import { isAuthenticated } from '../ARoute';
import { Button, Navbar, Label, Thumbnail, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chipotle from '../images/chipotle.png';
import qdoba from '../images/qdoba.png';
import madmushroom from '../images/madmushroom.png';
import moes from '../images/moes.png';
import panera from '../images/panera.png';
import potbelly from '../images/potbelly.png';
import mystery from "../images/mystery.png";
import subway from "../images/subway.png";

const Event = (data, {onClick}) => {

    function clickFollow(e) {

      const contextTypes = {
        router: PropTypes.object
      }
      if (isFollowing)
        isFollowing = 0;
      else {
        isFollowing = 1;
        console.log("following")      }

      console.log(e.target.value);
      const name = {
        name: e.target.value
      }
      apiPost('/followevent', name).then((response) => {
        if (response.success) {

        } else {
          this.setState({ apiError: response.message });
          sessionStorage.setItem('hey', response.message );
        }
      });
      window.location.reload();
    }
    function deleteEvent(e) {

      const contextTypes = {
        router: PropTypes.object
      }

      var name = {
        name: e.target.value,
        creator: e.target.id
      }

      apiPost('/deleteevent', name).then((response) => {
        if (response.success) {
          window.location.reload();
        } else {
          console.log(response.message);
        }
      });
    }

    var isOwner = 0;

    if (data.creator === data.username) {
      isOwner = 1;
    }

    var isFollowing = 0;
    for (var i = 0; i < data.following.length; i++) {
      if (data.name === data.following[i].name)
        isFollowing = 1;
    }

    var edate = (new Date(data.date)).toLocaleString();
    var currentdate = new Date();


    if ((data.home && isFollowing) || !data.home || isOwner) {
    return(
      <div>
      {Date.parse(currentdate) > Date.parse(data.date) ?null:
        <div class="card" >
          <div class="cardcontainer">
            <h1>{data.name}</h1>
            <p>Location: {data.location}</p>
            <p>Date: {edate}</p>
            <p>Creator: {data.creator}</p>
          </div>
          <div class="card-img">


            { data.type === "Chipotle" ?
              <img alt="" alt=""id="logo" src={chipotle} />:null
            }
            { data.type === "Mad Mushroom" ?
              <img alt="" alt=""id="logo" src={madmushroom} />:null
            }{ data.type === "Panera" ?
              <img alt="" alt=""id="logo" src={panera} />:null
            }{ data.type === "Potbelly" ?
              <img alt="" alt=""id="logo" src={potbelly} />:null
            }{ data.type === "Subway" ?
              <img alt="" alt=""id="logo" src={subway} />:null
            }{ data.type === "Qdoba" ?
              <img alt="" alt=""id="logo" src={qdoba} />:null
            }{ data.type === "Moes" ?
              <img alt="" alt=""id="logo" src={moes} />:null
            }{ data.type === "Other" ?
                <img alt="" alt=""id="logo" src={mystery} />:null
            }
            <br/>
            { isOwner ?
              <Button value={data.name} id={data.creator} onClick={deleteEvent} bsStyle="danger" >X</Button>
              :
              null
            }
            {isFollowing === 1?
              <Button id="follow" value={data.name} onClick={clickFollow} >Unfollow</Button>
            :
              <Button id="follow" value={data.name} onClick={clickFollow} >Follow</Button>
            }
          </div>

        </div>
      }
      </div>
    )
  } else {
    return(
      <div>
      </div>
    );
  }

}



export default Event;
