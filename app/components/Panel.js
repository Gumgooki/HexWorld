import React, { useState } from 'react';
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
  const [buttonToggle, setButtonToggle] = useState();
  return (
    <React.Fragment>
      <button onClick={() => setButtonToggle('scale')}>
        Movement and Scale
      </button>
      <button onClick={() => setButtonToggle('hexCol')}>
        Hex Color Customization
      </button>
      <button onClick={() => setButtonToggle('imageCol')}>
        Image Color Customization
      </button>
      {buttonToggle === 'scale' && (
        <div className="hexScales">
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
        </div>
      )}
      {buttonToggle === 'hexCol' && (
        <div className="colorHex">
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
        </div>
      )}
      {buttonToggle === 'imageCol' && (
        <div className="colorImg">
          <h2>IMAGE TINT</h2>
          <ChromePicker
            color={props.imageHue}
            onChange={(color) => props.loadImageHue(color.rgb)}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
