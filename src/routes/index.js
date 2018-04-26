import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "pages/components/layout/Main";
import Main from "pages/main";
import Products from "pages/products";
import { CssBaseline } from "material-ui";
import RoutePublic from './RoutePublic';

const CustomRoute = ({
  component: Component,
  layout: Layout,
  type: RouteType,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <RouteType>
        <Layout>
          <CssBaseline />
          <Component {...props} />
        </Layout>
      </RouteType>
    )}
  />
);

const Routes = () => (
  <Switch>
    <CustomRoute
      exact
      path="/"
      layout={MainLayout}
      type={RoutePublic}
      component={Main}
    />
    <Route
      exact
      path="/products"
      component={props => (
        <MainLayout>
          <Products {...props} />
        </MainLayout>
      )}
    />
    <Redirect from="*" to="/" />
  </Switch>
);

// const Routes = () => (
//   <Switch>
//     <Route exact path="/" component={Main} />
//     <Route exact path="/products" component={(props) => <MainLayout><Products {...props} /></MainLayout> } />
//     <Redirect from="*" to="/" />
//   </Switch>
// );

export default Routes;
