import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import WrapperGrid from './WrapperGrid';
import WrapperHex from './WrapperHex';
import { connect } from 'react-redux';

class WrapperTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //10 for wrapperGrid, 1 fgor hexGrid
      testNumber: 1,
    };
  }
  numberChanger(e) {
    this.setState({ testNumber: e.target.value });
  }
  render() {
    return (
      <div className="canvas">
        <P5Wrapper sketch={WrapperHex} testNumber={this.state.testNumber} />
        <input
          type="range"
          value={this.state.testNumber}
          min="1"
          max="10"
          step="1"
          onInput={this.numberChanger.bind(this)}
        />
      </div>
    );
  }
}

export default WrapperTest;
