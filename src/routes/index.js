import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../pages/main'
import Products from '../pages/products'


const Routes = () => (
  <Switch>
    {/* <Route exact path="/" component={Main} /> */}
    <Route exact path="/" component={Products} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
