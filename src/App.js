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
          <div className="col-sm-2 col-xs-12">
            <NavBar />
          </div>
          <div className="col-sm-8 col-xs-12">
            <div className="container-fluid">
              <Routes />
            </div>
          </div>
        </div>
        <footer>
            &copy; João da Silva 2018
        </footer>
      </div>
    );
  }
}

export default App;
