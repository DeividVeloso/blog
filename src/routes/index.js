import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pages from '../pages/'
import Posts from '../pages/posts/';
import Blog from '../pages/blog/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Pages} />
    <Route exact path="/post2" component={Posts} />
    <Route path="/posts" component={Posts} />
    <Route path="/blog" component={Blog} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
