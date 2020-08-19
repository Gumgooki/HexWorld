import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import WrapperGrid from './WrapperGrid';
import WrapperHex from './WrapperHex';
import { connect } from 'react-redux';
import {
  HuePicker,
  SliderPicker,
  Hue,
  Alpha,
  AlphaPicker,
  ChromePicker,
} from 'react-color';

class WrapperTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //10 for wrapperGrid, 1 fgor hexGrid
      testNumber: 1,
      hexColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
      hexNameColor: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
      imageHue: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      },
    };
  }
  hexSizeChanger(e) {
    this.setState({ testNumber: e.target.value });
  }

  hexColorChanger(color) {
    this.setState({ hexColor: color.rgb });
  }
  hexNameColorChanger(color) {
    this.setState({ hexNameColor: color.rgb });
  }
  imageHueChanger(color) {
    this.setState({ imageHue: color.rgb });
  }

  render() {
    return (
      <div className="canvas">
        <P5Wrapper
          sketch={WrapperHex}
          testNumber={this.state.testNumber}
          hexColor={this.state.hexColor}
          hexNameColor={this.state.hexNameColor}
          imageHue={this.state.imageHue}
        />
        <h2>SIZE</h2>
        <input
          type="range"
          value={this.state.testNumber}
          min="1"
          max="10"
          step="1"
          onInput={this.hexSizeChanger.bind(this)}
        />
        <h2>HEX COLOR</h2>
        <ChromePicker
          color={this.state.hexColor}
          onChange={this.hexColorChanger.bind(this)}
        />
        <h2>HEX NAME COLOR</h2>
        <ChromePicker
          color={this.state.hexNameColor}
          onChange={this.hexNameColorChanger.bind(this)}
        />
        <h2>IMAGE TINT</h2>
        <ChromePicker
          color={this.state.imageHue}
          onChange={this.imageHueChanger.bind(this)}
        />
      </div>
    );
  }
}

export default WrapperTest;
