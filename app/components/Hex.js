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
    let r, s;
    let hexagons;
    let img;
    function hexagon(x, y, r) {
      p.beginShape();
      for (let a = 0; a < 2 * p.PI; a += (2 * p.PI) / 6) {
        let x2 = p.cos(a) * r;
        let y2 = p.sin(a) * r;
        p.vertex(x + x2, y + y2);
      }
      p.endShape(p.CLOSE);
    }
    class Hexagon {
      constructor(x, y, r, name) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.name = name;
      }

      render() {
        p.noFill();
        p.stroke(0);
        hexagon(this.x, this.y, this.r);
        p.text(this.name, this.x, this.y);
      }
    }

    p.setup = () => {
      p.createCanvas(1500, 800);
      img = p.createImg(this.props.image.image);
      //need to hide this image for some reason, kind of a weird quirk?
      img.hide();
      p.textAlign(p.CENTER, p.CENTER);

      r = 50;
      s = p.sqrt((3 * p.pow(r, 2)) / 4);
      hexagons = [];

      // create hexagons
      let counter = 0;
      for (let y = 0; y < p.height + s; y += 2 * s) {
        for (let x = 0; x < p.width + r; x += 3 * r) {
          hexagons.push(new Hexagon(x, y, r, counter++));
          hexagons.push(new Hexagon(x + 1.5 * r, y + s, r, counter++));
        }
      }
    };

    p.draw = () => {
      //changing scale will adjust how zoomed the image is, but will also not utilize part of the canvas. Current implementation means there will be blank hexes
      var scale = 1;
      p.imageMode(p.CENTER);
      p.image(
        img,
        0.5 * p.width,
        0.5 * p.height,
        scale * p.width,
        (scale * img.height * p.width) / img.width
      );
      let nearestHexagon;
      hexagons.forEach((h) => {
        h.render();
        if (nearestHexagon === undefined) {
          nearestHexagon = h;
        }
      });
      p.stroke(200, 50, 50);
      p.line(nearestHexagon.x, nearestHexagon.y);
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
