import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const token = sessionStorage.getItem('token');
  let ret = false;

  if (token !== null) ret = token.length > 10;

  return ret
}

const NARoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated() === false
        ? <Component {...props} />
        : <Redirect to='/events' />}
    />
  )
}

const ARoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated() === true
        ? <Component {...props} />
        : <Redirect to='/login' />}
    />
  )
}
export {ARoute, isAuthenticated, NARoute};
