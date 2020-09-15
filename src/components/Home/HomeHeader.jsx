import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  bigTitle: {
    fontSize: 50,
    fontWeight: 900,
    letterSpacing: "-1px",
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    fontSize: 20,
    display: 'flex',
    margin: "20px",
    fontWeight: 200,
  },
  buttons: {
    display: 'flex',
    justifyContent: "space-around",
    marginTop: "20px",
  },
  buttonContent: {
    textTransform: "none",
    fontSize: "16px",
    fontWeight: 400,
  }

}));

const HomeHeader = () => {
  const classes = useStyles();

  const history = useHistory();

  const gettingStartedRouteChange = () => {
    let path = "/lessons/getting-started";
    history.push(path);
  }

  const infoRouteChange = () => {
    let path = '/concepts/what-is-crudy';
    history.push(path);
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.bigTitle}>CRUDy Posture</Typography>
      <Typography className={classes.description}>Audio lessons for improving how you feel</Typography>
      <div className={classes.buttons}>
        <Button variant="contained" onClick={gettingStartedRouteChange} className={classes.buttonContent}>Get Started</Button>

        <Button variant="outlined" onClick={infoRouteChange} className={classes.buttonContent}>Why is posture CRUDy?</Button>
      </div>
    </div>
  )
}

export default HomeHeader;
