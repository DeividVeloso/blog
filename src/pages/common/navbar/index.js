import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top navbar-main">
      <NavLink className="navbar-brand" to="/">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto flex-column">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Link
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link disabled" to="#">
              Disabled
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="http://example.com"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <NavLink className="dropdown-item" to="#">
                Action
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                Another action
              </NavLink>
              <NavLink className="dropdown-item" to="#">
                Something else here
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
