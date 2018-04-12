import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "material-ui/styles";
import CssBaseline from 'material-ui/CssBaseline'
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store/store";
//import App from './App';
import Routes from "./routes";

/* eslint "no-undef": "off" */
ReactDOM.render(
  <MuiThemeProvider>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
