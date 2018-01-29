import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./store/store";
import Routes from "./routes";

/* eslint "no-undef": "off" */
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
