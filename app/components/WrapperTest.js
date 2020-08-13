import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import WrapperGrid from './WrapperGrid';
import WrapperHex from './WrapperHex';
import { connect } from 'react-redux';
import { HuePicker, SliderPicker } from 'react-color';

class WrapperTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //10 for wrapperGrid, 1 fgor hexGrid
      testNumber: 1,
      hexColor: '#D68541',
    };
  }
  numberChanger(e) {
    this.setState({ testNumber: e.target.value });
  }

  colorChanger(color) {
    this.setState({ hexColor: color.hex });
  }

  render() {
    return (
      <div className="canvas">
        <P5Wrapper
          sketch={WrapperHex}
          testNumber={this.state.testNumber}
          hexColor={this.state.hexColor}
        />
        <input
          type="range"
          value={this.state.testNumber}
          min="1"
          max="10"
          step="1"
          onInput={this.numberChanger.bind(this)}
        />
        <SliderPicker
          color={this.state.hexColor}
          onChange={this.colorChanger.bind(this)}
        />
      </div>
    );
  }
}

export default WrapperTest;
