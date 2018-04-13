import React from "react";
import { withStyles } from "material-ui/styles";

const drawerWidth = 280;

const styles = theme => ({
  box: {
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: "5px",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  content: {
    backgroundColor: "green",
    borderColor: "green",
    borderWidth: "5px",
    //backgroundColor: '#fafafa',
    margin: '0 auto',
    maxWidth: 1140,
    paddingTop: '1em',
    paddingBottom: '1em',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      padding: '1em',
    },
  },
});

function MainLayout({ children, classes }) {
  return (
    <div className={classes.box}>
      <main className={classes.content}>{children}</main>
    </div>
  );
}
export default withStyles(styles)(MainLayout);
