import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
         <Typography className={classes.title}>CRUDy Posture</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;