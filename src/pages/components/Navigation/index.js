import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuItems }  from 'pages/components/MenuItems';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const drawerWidth = 260;
console.log("MenuItems",MenuItems)
const styles = theme => {
  return {
    drawerPaperClose: {
      position: 'fixed',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing.unit * 7,
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9
      },
      '&:hover': {
        whiteSpace: 'nowrap',
        width: drawerWidth,
        height: '100%',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    },
    menuLogo: {
      opacity: 1,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
  };
};

class MiniDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuLogo: false
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaperClose)
        }}
        open={false}
        onMouseOver={() => {
          this.setState({ showMenuLogo: true });
        }}
        onMouseLeave={() => {
          this.setState({ showMenuLogo: false });
        }}
      >
        <div>
          {this.state.showMenuLogo ? (
            <div className={classes.menuLogo}>
              <h2>Programador</h2>
              <MenuIcon style={{ color: '#7a7a7a' }} />
            </div>
          ) : (
              <ListItem button>
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
              </ListItem>
            )}
        </div>
        <List>{MenuItems}</List>
      </Drawer>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
