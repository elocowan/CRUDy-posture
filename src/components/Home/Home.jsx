import React from 'react';
import HomeHeader from './HomeHeader.jsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Home = ({redirect, setRedirect}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeHeader />
    </div>
  );
}

export default Home;