import React, { Component } from "react";
import "./App.css";
import "../src/template/dependencies";
import NavBar from "../src/pages/common/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
