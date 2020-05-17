import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    image: state.image,
  };
};

//need to get rid of the below, as this component is designed to render theimage that is now on state from the post.
//preferable would be able to turn image data on post into a p5 image object so we can immediately draw on it
const ImageRenderTest = (props) => {
  if (props.image.image === undefined) {
    return <ImageUploadTest />;
  } else {
    return <Grid />;
  }
};

export default connect(mapStateToProps)(ImageRenderTest);
