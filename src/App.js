import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>Main</div>
      <Switch>
        <Route path="/" />
        <Route path="/search">
          Search
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
