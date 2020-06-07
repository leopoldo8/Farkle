import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '@components/pages/home';
import Room from '@components/pages/room';

const RouterConfig = () => (
  <Router>
    <div id="PagesContainer">
      <div id="PagesTopClip" />
      <Switch>
        <Route path="/room/:id" component={Room} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default RouterConfig;
