import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import GettingStarted from './GettingStarted.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/getting-started">
            <GettingStarted />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
