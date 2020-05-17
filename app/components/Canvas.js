import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ImageUpload from './ImageUpload';
import ImageUploadTest from './ImageUploadTest';
import Grid from './Grid';

const mapStateToProps = function (state) {
  return {
    image: state.image,
  };
};

// class Canvas extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <ImageUpload />;
//   }
// }

const Canvas = (props) => {
  if (props.image.URL === undefined) {
    return <ImageUploadTest />;
  } else {
    return <Grid />;
  }
};

export default connect(mapStateToProps)(Canvas);
