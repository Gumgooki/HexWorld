import React from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../redux/image';

const mapStateToProps = function (state) {
  return {
    image: state.image,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadImage: (imageURL) => dispatch(fetchImage(imageURL)),
  };
};

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="imageURL">Image URL</label>
            <input
              type="text"
              name="imageURL"
              value={this.state.imageURL}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.loadImage(this.state.imageURL);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
