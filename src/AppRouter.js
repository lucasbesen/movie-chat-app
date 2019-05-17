import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './container/Home';
import Movie from './container/Movie';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/movie/:movieId"
        exact
        component={Movie}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
