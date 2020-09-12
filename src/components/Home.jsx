import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  elementContainer: {

  },
  bigTitle: {
    fontSize: 40,
    display: 'flex',
    justifyContent: 'center'
  },
  description: {
    fontSize: 20,
    display: 'flex',
  },
  buttons: {
    display: 'flex',
    justifyContent: "space-between"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.elementContainer}>
        <p className={classes.bigTitle}>CRUDy Posture</p>
        <p className={classes.description}>Audio Lessons for Improving Yourself</p>
        <div className={classes.buttons}><button>Get Started</button><button>What is CRUDy?</button></div>
      </div>
    </div>
  );
}

export default Home;