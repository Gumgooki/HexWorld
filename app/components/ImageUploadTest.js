import React from 'react';
import { connect } from 'react-redux';
import { fetchImageTest } from '../redux/image';

const mapStateToProps = function (state) {
  return {
    image: state.image,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    loadImage: (imageURL) => dispatch(fetchImageTest(imageURL)),
  };
};

class ImageUploadTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }
  render() {
    return (
      <div>
        <h2>Upload Image</h2>
        <form onSubmit={this.uploadHandler}>
          <div>
            <label htmlFor="selectedFile">Selected File</label>
            <input
              type="file"
              name="selectedFile"
              onChange={this.fileChangeHandler}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
  uploadHandler(event) {
    event.preventDefault();
    this.props.loadImage(this.state.selectedFile);
    console.log(this.state.selectedFile);
  }
  fileChangeHandler(event) {
    this.setState({ selectedFile: event.target.files[0] });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadTest);
