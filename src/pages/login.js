import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { apiPost } from '../api.js';
import Nav from '../UI/Nav';
import '../css/login.css'
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'

class login extends Component {
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

    apiPost('/login', credentials).then((data) => {
      if (data.success) {
        sessionStorage.setItem('token', data.token);
        this.context.router.history.push('/events');
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
        <div class="login-form">
          {this.state.apiError}
          <br/>
          <FormGroup bsSize="small">
            <FormControl type="username" placeholder="Username" onChange={this.username} />
            <FormControl type="password" placeholder="Password" onChange={this.password}/>
          </FormGroup>
          <Button bsStyle="success" onClick={ this.login }>Login</Button>

          <br/><br/><br/>
          Dont have an account?
          <br/>
          <Link to="/signup"><Button bsStyle="info">Signup</Button></Link>
        </div>
      </div>
    );
  }

  static contextTypes = {
    router: PropTypes.object
  }

}


export default login;
