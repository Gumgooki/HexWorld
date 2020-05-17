import React from 'react';
import Grid from './Grid';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          Welcome!
          <Link to="/test">Test</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/maps">Maps</Link>
          <Link to="/">Home</Link>
        </nav>
        <h1>
          Welcome to StackBot Project Management: your robot employees are
          awaiting assignments!
        </h1>
        {/* <p>This seems like a nice place to get started with some Routes!</p> */}
        <Switch>
          <Route exact path="/" component={Grid} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
