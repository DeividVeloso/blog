import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

/* eslint "no-undef": "off" */
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
