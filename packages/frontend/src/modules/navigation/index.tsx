import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../home';
import TodoListPageContainer from '../todo-list';
import { TodoItemPageContainer } from '../todo-item';
import NotFoundPageContainer from '../not-found';
import { APP_KEYS } from '../common/consts';
import { RegistrPageContainer } from '../registration';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={HomePageContainer} exact path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route component={RegistrPageContainer} exact path={APP_KEYS.ROUTER_KEYS.REGISTER} />
      <Route component={TodoListPageContainer} exact path={APP_KEYS.ROUTER_KEYS.TODO} />
      <Route component={TodoItemPageContainer} path={APP_KEYS.ROUTER_KEYS.ITEM} />
      <Route component={NotFoundPageContainer} path="*" />
    </Switch>
  </Router>
);
