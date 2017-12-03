import React from 'react';
import PropTypes from 'prop-types';
import '../css/Nav.css';
import { isAuthenticated } from '../ARoute';
import { Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Nav = ({onClick}) => {
    return(
      <div>
        <Navbar className='navbar'>
          Mooch Map
          { isAuthenticated() ?
            <div>
            <Button id='home' onClick={onClick} >Home</Button>
            <Button id='events' onClick={onClick} >Events</Button>
            <Button id='logout' style={{background: 'red', color: 'white'}} onClick={onClick} >Logout</Button>
            </div>
          : null}
        </Navbar>
        <div/>
      </div>
    )
}

export default Nav;
