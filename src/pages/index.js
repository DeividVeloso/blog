import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { mailFolderListItems, otherMailFolderListItems } from "./tileData";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography noWrap>
            {"You think water moves fast? You should see ice."}
          </Typography>
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "material-ui/styles";
// import AppBar from "material-ui/AppBar";
// import Toolbar from "material-ui/Toolbar";
// import Typography from "material-ui/Typography";
// import Button from "material-ui/Button";
// import IconButton from "material-ui/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Grid from "material-ui/Grid";
// import SideMenu from "./common/side-menu/SideMenu";

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   direction: {
//     flex: 1,
//     flexDirection: "row"
//   },
//   flex: {
//     flex: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
//   appBarSize: {
//     width: "25%",
//     heigth: "25%"
//   },
//   sideMenu: {
//     border: '3px solid red',
//     flex:1,
//     position: 'absolute',
//     top: '62px',
//     [theme.breakpoints.down('426')]: {
//         border: '3px solid red',
//         flex:1,
//         position: 'absolute',
//         top: '53px'
//       },
//   }
// });

// class ButtonAppBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowing: false
//     };
//   }

//   handleShowMenu = () => {
//     this.setState({ isShowing: !this.state.isShowing });
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <Grid direction={"row"} justify={"center"} container>
//           <Grid>{this.state.isShowing ? <Grid item xs={12} className={classes.sideMenu}><SideMenu /></Grid>: null}</Grid>
//           <Grid className={classes.flex}>
//             <AppBar position="static">
//               <Toolbar>
//                 <IconButton
//                   className={classes.menuButton}
//                   color="inherit"
//                   aria-label="Menu"
//                 >
//                   <MenuIcon onClick={this.handleShowMenu} />
//                 </IconButton>
//                 <Typography
//                   variant="title"
//                   color="inherit"
//                   className={classes.flex}
//                 >
//                   *** Devilin ***
//                 </Typography>
//                 <Button color="inherit">Login</Button>
//               </Toolbar>
//             </AppBar>
//             <Grid>
//               <p>
//                 <p>Talihina Sky</p>
//                 <p>
//                   Weeds blow tall on a broken train track Ruth B. draws we're
//                   fixin' to get high Maybe we'll hit the bluffs and find
//                   ourselves the same old rum
//                 </p>
//                 <p>
//                   But everybody says this place is beautiful And you'd be so
//                   crazy to say goodbye But everything's the same this town is
//                   pitiful And I'll be gettin' out as soon as I can fly
//                 </p>
//                 <p>
//                   Life goes by on a Talihina sky The hopped up boys are lookin'
//                   for their trouble The knocked up girls, well they've all got
//                   their share Ruth seems out of her mind, swears she won't give
//                   in this time
//                 </p>
//               </p>
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ButtonAppBar);
