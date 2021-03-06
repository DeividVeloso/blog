import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Posts from '../pages/posts/';
import Blog from '../pages/blog/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Posts} />
    <Route path="/posts" component={Posts} />
    <Route path="/blog" component={Blog} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
