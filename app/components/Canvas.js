import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ImageUpload from './ImageUpload';
import Hex from './Hex';
import OriginalGrid from './OriginalGrid';
import WrapperTest from './WrapperTest';

const mapStateToProps = function (state) {
  return {
    image: state.image,
  };
};

const Canvas = (props) => {
  if (props.image.image === undefined) {
    return <ImageUpload />;
  } else {
    return <WrapperTest />;
  }
};

export default connect(mapStateToProps)(Canvas);
