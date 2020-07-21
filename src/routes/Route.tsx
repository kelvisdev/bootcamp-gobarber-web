import React from 'react';
import {
  Route as RouteDOMRoute,
  RouteProps as ReactDOMRouteProsp,
  Redirect
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { render } from '@testing-library/react';

interface RouteProps extends ReactDOMRouteProsp {
  isPrivate?: boolean;
  component: React.ComponentType;
}


const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <RouteDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location }
              }} />
          )
      }}

    />
  );
};

export default Route;
