import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px"
  },
  bigTitle: {
    fontSize: "60px",
    fontWeight: "bold"
  },
}));

const GettingStarted = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <Typography className={classes.bigTitle}>Getting Started</Typography>
  </div>
  );
}

export default GettingStarted;