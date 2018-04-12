import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "material-ui/Grid";
import SideMenu from "./common/side-menu/SideMenu";

const styles = {
  root: {
    flexGrow: 1
  },
  direction: {
    flex: 1,
    flexDirection: "row"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class ButtonAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false
    };
  }

  handleShowMenu = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid direction={"row"} justify={"center"} container className={classes.root}>
        <Grid item xs={12}>
          <Grid>
            {this.state.isShowing ? <SideMenu /> : null}
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon onClick={this.handleShowMenu} />
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.flex}
                >
                  Title
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
