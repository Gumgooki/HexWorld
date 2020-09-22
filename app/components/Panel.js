import React from 'react';
import { connect } from 'react-redux';
import WrapperTest from './WrapperTest';
import { fetchHexSize } from '../redux/hex-changer';

const mapStateToProps = function (state) {
  return (state = state.hexChanger);
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadHexSize: (number) => dispatch(fetchHexSize(number)),
  };
};

const Panel = (props) => {
  console.log('here are the props', props);
  return (
    <div className="panel">
      {/* <h1>Hello This Is The Panel</h1>
      <h2>X INPUT</h2>
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
      /> */}
      <h2>SIZE</h2>
      <input
        type="range"
        value={props.testNumber}
        min="1"
        max="10"
        step="1"
        onInput={(e) => props.loadHexSize(e.target.value)}
      />
      {/* <h2>HEX COLOR</h2>
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
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
