import React from 'react';
import p5 from 'p5';

class SketchTest extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let y = 0;
    let bg;
    p.setup = () => {
      bg = p.loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
      );
      p.createCanvas(692, 979);
    };

    p.draw = () => {
      p.background(bg);
      p.stroke(226, 204, 0);
      p.line(0, y, 979, y);

      y++;
      if (y > 692) {
        y = 0;
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

export default SketchTest;
