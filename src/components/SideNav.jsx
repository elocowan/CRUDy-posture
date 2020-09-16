import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  sideNav: {
    marginTop: "100px"
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const SideNav = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <div className={classes.sideNav} />
      <nav>
        <ul>
          <li>
            <Typography>this would also be a list</Typography>
          </li>
          <li>
            <Typography>this would also be a list</Typography>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;