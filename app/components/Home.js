import React from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';
import Panel from './Panel';

const Home = () => {
  return (
    <div className="home">
      <Canvas />
    </div>
  );
};

export default Home;
