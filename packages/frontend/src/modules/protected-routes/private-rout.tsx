import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { TOKEN_STORAGE } from '../common/consts/app-keys.const';

export type IProtectedRouteProps = {
  redirectPath: string;
} & RouteProps;

export const PrivateRoute = ({ redirectPath, ...routeProps }: IProtectedRouteProps) => {
  if (localStorage.getItem(TOKEN_STORAGE)) {
    return <Route {...routeProps} />;
  }
  return <Redirect to={{ pathname: redirectPath }} />;
};
