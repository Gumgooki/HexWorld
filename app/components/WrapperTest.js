import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import WrapperGrid from './WrapperGrid';
import { connect } from 'react-redux';

class WrapperTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testNumber: 10,
    };
  }
  numberChanger(e) {
    this.setState({ testNumber: e.target.value });
  }
  render() {
    return (
      <div>
        <P5Wrapper sketch={WrapperGrid} testNumber={this.state.testNumber} />
        <input
          type="range"
          value={this.state.testNumber}
          min="1"
          max="20"
          step="1"
          onInput={this.numberChanger.bind(this)}
        />
      </div>
    );
  }
}

export default WrapperTest;
