import React from 'react';
import Grid from './Grid';
import Navbar from './Nav';
import Canvas from './Canvas';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <p>This seems like a nice place to get started with some Routes!</p> */}
        <Switch>
          <Route exact path="/" component={Canvas} />
        </Switch>
        <Switch>
          <Route exact path="/test" component={Grid} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
