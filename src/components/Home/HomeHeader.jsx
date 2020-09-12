import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    justifyContent: "space-around"
  }
}));

const HomeHeader = () => {
  const classes = useStyles();
  return (
    <div>
        <p className={classes.bigTitle}>CRUDy Posture</p>
        <p className={classes.description}>Audio Lessons for Improving Yourself</p>
        <div className={classes.buttons}><button>Get Started</button><button>What is CRUDy?</button></div>
      </div>
  )
}

export default HomeHeader;
