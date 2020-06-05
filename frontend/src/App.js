import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Place from './places/pages/Place';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/places/new" component={Place} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
