import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { apiPost } from '../api.js';
import Nav from '../UI/Nav';
import '../css/login.css'
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'

class signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {apiError: null};
  }

  username = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  password = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    const credentials = {
      username: this.state.username,
      password: this.state.password
    }

    apiPost('/signup', credentials).then((data) => {
      if (data.success) {
        this.context.router.history.push('/login');
      } else {
        this.setState({ apiError: data.message })
        sessionStorage.setItem('hey', data.message )
      }
    });
  }

  render (){
    return (
      <div>
        <Nav/>
        <div className="login-form">
          <br/>
          {this.state.apiError}
          <FormGroup bsSize="small">
            <FormControl type="username" placeholder="Username" onChange={this.username} />
            <FormControl type="password" placeholder="Password" onChange={this.password}/>
          </FormGroup>
          <Button bsStyle="success" onClick={ this.signup }>signup</Button>
          <br/><br/><br/>
          Already have an account?
          <br/>
          <Link to="/login"><Button bsStyle="info">Login</Button></Link>
        </div>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }

}


export default signup;
