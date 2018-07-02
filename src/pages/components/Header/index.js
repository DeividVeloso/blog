import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = () => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
    paddingLeft: 80
  }
});

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="absolute">
        <Toolbar className={classes.menuButton}>
          <Typography variant="title" color="inherit" noWrap>
            {this.props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(Header);
