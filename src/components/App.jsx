import React from 'react';
import Header from './Header.jsx';
import Home from './Home/Home.jsx';
import GettingStarted from './GettingStarted.jsx';
import GoodPosture from './GoodPosture.jsx';
import SideNav from './SideNav.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core';
import WhatIsCrudy from './WhatIsCrudy.jsx';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#e0ffb1',
      main: '#add681',
      dark: '7ca453',
      contrastText: '#000000',
    },
  },
})

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  page: {
    display: 'flex',
    flexDirection: 'row',
  }
}));

const App = () => {

  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div className={classes.toolbar}></div>
          <Switch>
            <Route path="/lessons/getting-started">
              <div className={classes.page}>
                <GettingStarted />
              </div>
            </Route>
            <Route path="/lessons/good-posture">
              <GoodPosture />
            </Route>
            <Route path="/concepts/what-is-crudy">
              <WhatIsCrudy />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div >
  );
}

export default App;
