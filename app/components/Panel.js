import React from 'react';
import { connect } from 'react-redux';
import {
  fetchHexSize,
  fetchHexColor,
  fetchHexNameColor,
  fetchImageHue,
  fetchXInput,
  fetchYInput,
} from '../redux/hex-changer';
import { ChromePicker } from 'react-color';

const mapStateToProps = function (state) {
  return (state = state.hexChanger);
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadHexSize: (number) => dispatch(fetchHexSize(number)),
    loadHexColor: (color) => dispatch(fetchHexColor(color)),
    loadHexNameColor: (color) => dispatch(fetchHexNameColor(color)),
    loadImageHue: (hue) => dispatch(fetchImageHue(hue)),
    loadXInput: (x) => dispatch(fetchXInput(x)),
    loadYInput: (y) => dispatch(fetchYInput(y)),
  };
};

const Panel = (props) => {
  return (
    <div className="panel">
      <h1>Hello This Is The Panel</h1>
      <h2>X INPUT</h2>
      <input
        type="range"
        value={props.gridX}
        min="-50"
        max="50"
        step="1"
        onInput={(e) => props.loadXInput(parseInt(e.target.value))}
      />
      <h2>Y INPUT</h2>
      <input
        type="range"
        value={props.gridY}
        min="-40"
        max="40"
        step="1"
        onInput={(e) => props.loadYInput(parseInt(e.target.value))}
      />
      <h2>SIZE</h2>
      <input
        type="range"
        value={props.testNumber}
        min="1"
        max="10"
        step="1"
        onInput={(e) => props.loadHexSize(e.target.value)}
      />
      <h2>HEX COLOR</h2>
      <ChromePicker
        color={props.hexColor}
        onChange={(color) => props.loadHexColor(color.rgb)}
      />
      <h2>HEX NAME COLOR</h2>
      <ChromePicker
        color={props.hexNameColor}
        onChange={(color) => props.loadHexNameColor(color.rgb)}
      />
      <h2>IMAGE TINT</h2>
      <ChromePicker
        color={props.imageHue}
        onChange={(color) => props.loadImageHue(color.rgb)}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
