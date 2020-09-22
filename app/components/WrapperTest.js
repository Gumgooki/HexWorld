import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import WrapperHex from './WrapperHex';
import { connect } from 'react-redux';

import Panel from './Panel';

const mapStateToProps = function (state) {
  return {
    state: state.hexChanger,
  };
};

class WrapperTest extends React.Component {
  render() {
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
        </div>
        <div className="panel">
          <Panel />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(WrapperTest);
