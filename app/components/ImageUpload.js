import React from 'react';
import { connect } from 'react-redux';
import { fetchImageTest } from '../redux/image';
import Dropzone from 'react-dropzone';

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
    this.onImageChange = this.onImageChange.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }
  render() {
    return (
      <Dropzone onDrop={(acceptedFiles) => this.onImageChange(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section className="upload-container">
            <div {...getRootProps()} className="upload-box">
              <input {...getInputProps()} />
              <p>Drop your map here</p>
              <i className="fas fa-upload"></i>
            </div>
          </section>
        )}
      </Dropzone>
    );
  }
  uploadHandler(event) {
    this.props.loadImage(this.state.image);
  }

  onImageChange = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log('After the reader.onload starts', e);
        this.setState({ image: e.target.result });
        this.uploadHandler();
      };
      console.log('Before the reader.ReadAsDataURL invoked', acceptedFiles[0]);
      reader.readAsDataURL(acceptedFiles[0]);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadTest);
