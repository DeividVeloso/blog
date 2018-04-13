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
  },
  appBarSize: {
    width: "25%",
    heigth: "25%"
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
      <div className={classes.root}>
        <Grid direction={"row"} justify={"center"} container>
          <Grid>{this.state.isShowing ? <SideMenu /> : null}</Grid>
          <Grid className={classes.flex}>
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
            <Grid>
              <p>
                <p>Talihina Sky</p>
                <p>
                  Weeds blow tall on a broken train track Ruth B. draws we're
                  fixin' to get high Maybe we'll hit the bluffs and find
                  ourselves the same old rum
                </p>
                <p>
                  But everybody says this place is beautiful And you'd be so
                  crazy to say goodbye But everything's the same this town is
                  pitiful And I'll be gettin' out as soon as I can fly
                </p>
                <p>
                  Life goes by on a Talihina sky The hopped up boys are lookin'
                  for their trouble The knocked up girls, well they've all got
                  their share Ruth seems out of her mind, swears she won't give
                  in this time
                </p>
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
