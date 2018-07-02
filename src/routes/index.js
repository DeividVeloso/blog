import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "pages/components/layout/Main";
import Home from "pages/Home";
import Politics from "pages/Politics";
import Products from "pages/Products";
import CssBaseline from "@material-ui/core/CssBaseline";
import RoutePublic from './RoutePublic';
import Screen from 'pages/components/Screen'

const CustomRoute = ({
  component: Component,
  type: RouteType,
  ...rest
}) => (
    <Route
      {...rest}
      render={props => (
        <RouteType>
          <CssBaseline />
          <Screen title={rest.title}>
            <Component {...props} />
          </Screen>
        </RouteType>
      )}
    />
  );

const Routes = () => (
  <Switch>
    <CustomRoute
      exact
      path="/"
      type={RoutePublic}
      component={Home}
      title="Estudos"
    />
    <CustomRoute
      exact
      path="/politics"
      type={RoutePublic}
      component={Politics}
      title="Política de Adesão"
    />
    <CustomRoute
      exact
      path="/products"
      type={RoutePublic}
      component={Products}
      title="Produtos"
    />
    {/* <Route
      exact
      path="/products"
      component={props => (
        <MainLayout>
          <Products {...props} />
        </MainLayout>
      )}
    /> */}
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
