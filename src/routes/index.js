import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from '../pages/components/layout/Main'
import Main from '../pages/main'
import Products from '../pages/products'


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/products" component={(props) => <MainLayout><Products {...props} /></MainLayout> } />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
