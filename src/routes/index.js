import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Posts from "../pages/posts/";
import App from "../App";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/users" component={Posts} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
