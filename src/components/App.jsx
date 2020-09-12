import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Home from './Home/Home.jsx';
import GettingStarted from './GettingStarted.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
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

const App = () => {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/getting-started">
              <GettingStarted />
            </Route>
            <Route path="/what-is-crudy">
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
