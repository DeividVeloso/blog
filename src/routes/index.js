import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/posts/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Posts} />
    <Route path="/posts" component={Posts} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
