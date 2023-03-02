import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../home';
import TodoListPageContainer from '../todo-list';
import { TodoItemPageContainer } from '../todo-item';
import NotFoundPageContainer from '../not-found';
import { APP_KEYS } from '../common/consts';
import { RegistrPageContainer } from '../registration';
import { LoginPageContainer } from '../login';
import { PublicRoute } from '../protected-routes/public-rout';
import { PrivateRoute } from '../protected-routes/private-rout';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={HomePageContainer} exact path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <PublicRoute
        redirectPath={APP_KEYS.ROUTER_KEYS.TODO}
        component={RegistrPageContainer}
        exact
        path={APP_KEYS.ROUTER_KEYS.REGISTER}
      />
      <PublicRoute
        redirectPath={APP_KEYS.ROUTER_KEYS.TODO}
        component={LoginPageContainer}
        exact
        path={APP_KEYS.ROUTER_KEYS.LOGIN}
      />
      <PrivateRoute
        redirectPath={APP_KEYS.ROUTER_KEYS.LOGIN}
        component={TodoListPageContainer}
        exact
        path={APP_KEYS.ROUTER_KEYS.TODO}
      />
      <PrivateRoute
        redirectPath={APP_KEYS.ROUTER_KEYS.LOGIN}
        component={TodoItemPageContainer}
        exact
        path={APP_KEYS.ROUTER_KEYS.ITEM}
      />
      <Route component={NotFoundPageContainer} path="*" />
    </Switch>
  </Router>
);
