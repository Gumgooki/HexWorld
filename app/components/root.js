import React from 'react';
import Sketch from './Sketch';
import SketchTest from './SketchTest';
import Hex from './Hex';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          Welcome!
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
          <Route exact path="/upload">
            <SketchTest />
          </Route>
          <Route exact path="/maps">
            <Hex />
          </Route>
          <Route exact path="/" component={Sketch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
