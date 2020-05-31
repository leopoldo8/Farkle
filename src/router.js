import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '@components/pages/home';

const RouterConfig = () => (
  <Router>
    <div id="PagesContainer">
      <div id="PagesTopClip" />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default RouterConfig;
