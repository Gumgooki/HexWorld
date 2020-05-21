import React from 'react';
import Navbar from './Nav';
import Canvas from './Canvas';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Canvas} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
