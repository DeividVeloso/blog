import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Header from "pages/components/header/Header";

const drawerWidth = 280;

const styles = theme => ({
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

function MainLayout({ children, classes }) {
  return (
    <Header>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>
          {"You think water moves fast? You should see ice."}
        </Typography>
        {children}
      </main>
    </Header>
  );
}
export default withStyles(styles)(MainLayout);
