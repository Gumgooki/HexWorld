import React from 'react';
import p5 from 'p5';

class Hex extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let bg;
    p.setup = () => {
      bg = p.loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
      );
      p.createCanvas(692, 979);
    };

    p.draw = () => {
      p.background(bg);
      for (var x = 0; x < p.width; x += p.width / 10) {
        for (var y = 0; y < p.height; y += p.height / 5) {
          p.stroke(0);
          p.strokeWeight(1);
          p.line(x, 0, x, p.height);
          p.line(0, y, p.width, y);
        }
      }
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default Hex;
