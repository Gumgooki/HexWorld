import React from 'react';
import p5 from 'p5';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    image: state.image,
  };
};

class Hex extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  gridSketch = (p) => {
    var img;
    p.setup = () => {
      p.createCanvas(1500, 800);
      img = p.createImg(this.props.image.image);
      img.hide();
      // p.background(100);
    };

    p.draw = () => {
      //changign scale will adjust how zoomed the image is, but will also not utilize part of the canvas. Current implementation means there will be blank hexes
      var scale = 1;
      p.imageMode(p.CENTER);
      p.image(
        img,
        0.5 * p.width,
        0.5 * p.height,
        scale * p.width,
        (scale * img.height * p.width) / img.width
      );
      for (var x = 0; x <= p.width; x += p.width / 20) {
        for (var y = 0; y <= p.height; y += p.height / 20) {
          p.stroke(0);
          p.strokeWeight(1);
          p.line(x, 0, x, p.height);
          p.line(0, y, p.width, y);
        }
      }
    };
  };

  componentDidMount() {
    this.myP5 = new p5(this.gridSketch, this.myRef.current);
  }

  render() {
    return <div className="canvas" ref={this.myRef}></div>;
  }
}

export default connect(mapStateToProps)(Hex);
