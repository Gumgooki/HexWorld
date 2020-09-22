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
import Panel from './Panel';

const mapStateToProps = function (state) {
  return {
    state: state.hexChanger,
  };
};

class WrapperTest extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = this.props.state;
  // this.state = {
  //   //10 for wrapperGrid, 1 fgor hexGrid
  //   testNumber: 1,
  //   hexColor: {
  //     r: 255,
  //     g: 255,
  //     b: 255,
  //     a: 1,
  //   },
  //   hexNameColor: {
  //     r: 255,
  //     g: 255,
  //     b: 255,
  //     a: 1,
  //   },
  //   imageHue: {
  //     r: 255,
  //     g: 255,
  //     b: 255,
  //     a: 1,
  //   },
  //   gridY: 0,
  //   gridX: 0,
  // };
  //}
  // hexSizeChanger(e) {
  //   this.setState({ testNumber: e.target.value });
  // }

  // hexColorChanger(color) {
  //   this.setState({ hexColor: color.rgb });
  // }
  // hexNameColorChanger(color) {
  //   this.setState({ hexNameColor: color.rgb });
  // }
  // imageHueChanger(color) {
  //   this.setState({ imageHue: color.rgb });
  // }
  // gridXChanger(e) {
  //   this.setState({ gridX: parseInt(e.target.value) });
  // }
  // gridYChanger(e) {
  //   this.setState({ gridY: parseInt(e.target.value) });
  // }

  render() {
    console.log('wrappertest log', this.props);
    return (
      <div>
        <div className="canvas">
          <P5Wrapper
            sketch={WrapperHex}
            testNumber={this.props.state.testNumber}
            hexColor={this.props.state.hexColor}
            hexNameColor={this.props.state.hexNameColor}
            imageHue={this.props.state.imageHue}
            gridX={this.props.state.gridX}
            gridY={this.props.state.gridY}
          />
          {/* <h2>X INPUT</h2>
        <input
          type="range"
          value={this.state.gridX}
          min="-50"
          max="50"
          step="1"
          onInput={this.gridXChanger.bind(this)}
        />
        <h2>Y INPUT</h2>
        <input
          type="range"
          value={this.state.gridY}
          min="-40"
          max="40"
          step="1"
          onInput={this.gridYChanger.bind(this)}
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
        /> */}
        </div>
        <div className="panel">
          <Panel />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WrapperTest);
