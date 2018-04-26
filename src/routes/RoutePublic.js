import React from "react";
import { connect } from "react-redux";
import Redirect from "react-router-dom/Redirect";

class RoutePublic extends React.Component {
  render() {
    const { children, authenticated } = this.props;
    console.log("Chidren", children)
    return !authenticated ? children : <Redirect to="/" />;
  }
}
export default RoutePublic