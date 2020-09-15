import React from 'react';
import HomeHeader from './HomeHeader.jsx';
import HomeBody from './HomeBody.jsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    marginTop: "100px",
    marginBottom: "100px",
  },
  body: {
    flex: 1,
    marginTop: "100px",
    width: "80%"
  },
  dividerLines: {
    width: "100%",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <HomeHeader />
      </div>
      <div className={classes.body}>
        <HomeBody />
      </div>
    </div>
  );
}

export default Home;