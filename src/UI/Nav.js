import React from 'react';
import PropTypes from 'prop-types';
import '../css/Nav.css';
import { isAuthenticated } from '../ARoute';
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../images/pangea.png'

const Nav = ({onClick}) => {
    return(
      <div>
        <Navbar className='navbar'>
          <div id="title">
            <img alt="" alt=""id="logo" src={logo} />
            Mooch Map
          </div>
          { isAuthenticated() ?
            <div>
            <Button id='home' onClick={onClick} >Home</Button>
            <Button id='events' onClick={onClick} >Events</Button>
            <Link to="/create"><Button id='events' bsStyle="success" onClick={onClick}>Create</Button></Link>
            <Button id='logout' style={{background: 'red', color: 'white'}} onClick={onClick} >Logout</Button>
            </div>
          : null}
        </Navbar>
        <div/>
      </div>
    )
}

export default Nav;
