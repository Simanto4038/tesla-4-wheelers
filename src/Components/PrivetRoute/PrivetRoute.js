import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
  const {user, isLoading}=useAuth();
  console.log(user);
  if (isLoading) {
    return <Spinner animation='border' variant='danger'/>
  }
  return (
      <Route
        {...rest}
        render={({ location }) =>
        (user.displayname||user.email) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/logIn",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  
};

export default PrivetRoute;