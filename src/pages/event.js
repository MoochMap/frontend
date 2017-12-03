import React from 'react';
import PropTypes from 'prop-types';
import '../css/Nav.css';
import '../css/events.css';
import { isAuthenticated } from '../ARoute';
import { Button, Navbar, Label, Thumbnail, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chipotle from '../images/chipotle.png';
import qdoba from '../images/qdoba.png';
import madmushroom from '../images/madmushroom.png';
import moes from '../images/moes.png';
import panera from '../images/panera.png';
import potbelly from '../images/potbelly.png';


const Event = (data) => {
    console.log(data);


    return(
      <div>
        <div class="card" >
          <div class="cardcontainer">
            <h1>{data.name}</h1>
            <p>Location: {data.location}</p>
            <p>Date: {data.date}</p>
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
              <img alt="" alt=""id="logo" src={"../images/subway.png"} />:null
            }{ data.type === "Qdoba" ?
              <img alt="" alt=""id="logo" src={qdoba} />:null
            }{ data.type === "Moes" ?
              <img alt="" alt=""id="logo" src={moes} />:null
            }{ data.type === "Other" ?
                <img alt="" alt=""id="logo" src={"../images/mystery.png"} />:null
            }
            <br/>
            <Button>Follow</Button>
          </div>


        </div>
      </div>
    )
}

export default Event;
