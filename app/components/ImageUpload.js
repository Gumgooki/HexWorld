import React from 'react';
import { connect } from 'react-redux';
import { fetchImageTest } from '../redux/image';
import ReactDropzone from 'react-dropzone';

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
      image: null,
    };
    this.fileChangeHandler = this.fileChangeHandler.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }
  render() {
    return (
      <div id="file-upload">
        <input
          type="file"
          onChange={this.onImageChange}
          className="filetype"
          id="group_image"
        />
      </div>
    );
  }
  uploadHandler(event) {
    this.props.loadImage(this.state.image);
  }

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log('After the reader.onload starts', e);
        this.setState({ image: e.target.result });
        this.uploadHandler();
      };
      console.log(
        'Before the reader.ReadAsDataURL invoked',
        event.target.files[0]
      );
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  fileChangeHandler(event) {
    this.setState({ selectedFile: event.target.files[0] });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadTest);
