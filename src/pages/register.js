import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class register extends Component {
  render (){
    return (
      <div>
        <Link to='/events'><button>Events</button></Link>
      </div>
    );
  }

}


export default register;
