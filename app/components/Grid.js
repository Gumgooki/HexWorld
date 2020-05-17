import React from 'react';
import p5 from 'p5';
import gridSketch from '../sketches/gridSketch';

class Hex extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.Sketch = gridSketch;
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div className="canvas" ref={this.myRef}></div>;
  }
}

export default Hex;
