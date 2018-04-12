import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Divider from 'material-ui/Divider';
import { NavLink } from 'react-router-dom';

// const style = {
//   paper: {
//     display: 'inline-block',
//     float: 'left',
//     margin: '16px 32px 16px 0'
//   },
//   rightIcon: {
//     textAlign: 'center',
//     lineHeight: '24px'
//   }
// };

// const NavBar = () => (
//   <div>
//     <Paper style={style.paper}>
//       <Menu open>
//         <MenuItem>
//           <NavLink to="#">Home</NavLink>
//         </MenuItem>
//         <MenuItem>
//           <NavLink to="#">Teste</NavLink>
//         </MenuItem>
//         <MenuItem>
//           <NavLink to="#">Teste2</NavLink>
//         </MenuItem>
//         <Divider />
//       </Menu>
//     </Paper>
//   </div>
// );

// export default NavBar;

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-main main-navbar">
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
            <NavLink className="nav-link" to="/blog">
              Blog2
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
