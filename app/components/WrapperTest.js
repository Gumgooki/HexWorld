import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import WrapperGrid from './WrapperGrid';
import WrapperHex from './WrapperHex';
import { connect } from 'react-redux';
import { HuePicker, SliderPicker, Hue, Alpha, AlphaPicker } from 'react-color';

class WrapperTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //10 for wrapperGrid, 1 fgor hexGrid
      testNumber: 1,
      hexColor: '#D68541',
      imageHue: 0,
      imageAlpha: 0,
    };
  }
  hexSizeChanger(e) {
    this.setState({ testNumber: e.target.value });
  }

  hexColorChanger(color) {
    this.setState({ hexColor: color.hex });
  }
  imageHueChanger(color) {
    this.setState({ imageHue: color.hsl });
  }
  imageAlphaChanger(color) {
    this.setState({ imageAlpha: color.hsl });
  }

  render() {
    return (
      <div className="canvas">
        <P5Wrapper
          sketch={WrapperHex}
          testNumber={this.state.testNumber}
          hexColor={this.state.hexColor}
          imageHue={this.state.imageHue}
          imageAlpha={this.state.imageAlpha}
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
        <h2>COLOR</h2>
        <SliderPicker
          color={this.state.hexColor}
          onChange={this.hexColorChanger.bind(this)}
        />
        <h2>IMAGE TINT</h2>
        <HuePicker
          color={this.state.imageHue}
          onChange={this.imageHueChanger.bind(this)}
        />
        <AlphaPicker
          color={this.state.imageAlpha}
          onChange={this.imageAlphaChanger.bind(this)}
        />
      </div>
    );
  }
}

export default WrapperTest;
