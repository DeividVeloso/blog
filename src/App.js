import React, { Component } from 'react';
import './App.css';
import '../src/template/dependencies';
import NavBar from '../src/pages/common/navbar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-2">
            <NavBar />
          </div>
          <div className="col-8">
            <div className="container-fluid">
              <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
