import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import CssBaseline from "material-ui/CssBaseline";
import "typeface-roboto";
import { connect } from "react-redux";
import { store } from "store";
import Routes from "./routes";

const theme = createMuiTheme({
  palette: {
    type: "light" // Switching the dark mode on is a single property value change.
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
export default App;
