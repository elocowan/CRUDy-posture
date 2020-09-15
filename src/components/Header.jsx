import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  homeName: {
    color: "rgb(235,251,255)",
    cursor: "pointer",
    fontWeight: 700,
  },
  navNames: {
    color: "rgb(235,251,255)",
    cursor: "pointer",
    fontWeight: 200,
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    alignItems: 'center',
  }
}));

const Header = () => {
  const classes = useStyles();

  const history = useHistory();

  const goHome = () => {
    let path = '/';
    history.push(path);
  }

  const goToLessons = () => {
    let path = '/lessons/getting-started';
    history.push(path);
  }

  const goToConcepts = () => {
    let path = '/concepts/what-is-crudy';
    history.push(path);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item xs={1}>
              <Typography onClick={goHome} className={classes.homeName}>
                CRUDy Posture
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
              <Typography onClick={goToLessons} className={classes.navNames}>
                Lessons
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography onClick={goToConcepts} className={classes.navNames}>
                Concepts
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar >
    </div >
  )
}

export default Header;