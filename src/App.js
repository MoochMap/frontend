import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ARoute, NARoute } from './ARoute'
import Home from './pages/home';
import Create from './pages/create';
import Events from './pages/events'
import Register from './pages/signup';
import Login from './pages/login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <div className="content">
            <Route exact path="/" component={ Login } />
              <NARoute path="/signup" component={ Register } />
              <NARoute path="/login" component={ Login } />
              <ARoute path="/events" component={ Events } />
              <ARoute path="/home" component={ Home } />
              <ARoute path="/create" component={ Create } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
