import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import CssBaseline from "material-ui/CssBaseline";
import "typeface-roboto";
import { connect } from "react-redux";

import { changeTheme } from "store/actions/theme";
import Routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: createMuiTheme({
        palette: {
          type: "light" // Switching the dark mode on is a single property value change.
        }
      })
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.theme.type !== prevState.theme.palette.type) {
      const theme = createMuiTheme({
        palette: {
          type: nextProps.theme.type // Switching the dark mode on is a single property value change.
        }
      });

      return { theme }
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => {
  return { theme: state.theme };
};
export default connect(mapStateToProps)(App);
