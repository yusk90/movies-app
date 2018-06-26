import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SearchPage, MovieDetailsPage, NotFound } from 'containers';

import './index.less';

const App = () => (
  <Switch>
    <Route exact path="/" component={SearchPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/film/:id" component={MovieDetailsPage} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
