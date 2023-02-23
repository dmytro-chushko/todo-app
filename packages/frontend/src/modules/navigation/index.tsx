import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../home';
import TodoListPageContainer from '../pages/todo-list';
import TodoItemPageContainer from '../pages/todo-item';
import NotFoundPageContainer from '../pages/not-found';
import { APP_KEYS } from '../common/consts';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={HomePageContainer} exact path={APP_KEYS.ROUTER_KEYS.ROOT} />
      <Route component={TodoListPageContainer} exact path={APP_KEYS.ROUTER_KEYS.TODO} />
      <Route component={TodoItemPageContainer} path={APP_KEYS.ROUTER_KEYS.ITEM} />
      <Route component={NotFoundPageContainer} path="*" />
      {/* <Route element={<div>Not fount</div>} path="*" /> */}
    </Switch>
  </Router>
);
