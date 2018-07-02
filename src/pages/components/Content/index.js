import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 10,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
})

class Content extends React.Component {
  render() {
    const { classes, renderChildren } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderChildren}
      </main>
    );
  }
}
export default withStyles(styles)(Content);
