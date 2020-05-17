const axios = require('axios');

const SET_IMAGE = 'SET_IMAGE';
const SET_IMAGE_TEST = 'SET_IMAGE_TEST';

const initialState = {};

export const setImage = function (image) {
  return {
    type: SET_IMAGE,
    image,
  };
};

export const setImageTest = function (image) {
  return {
    type: SET_IMAGE_TEST,
    image,
  };
};

export const fetchImage = function (imageURL) {
  return async (dispatch) => {
    try {
      dispatch(setImage(imageURL));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchImageTest = function (image) {
  return async (dispatch) => {
    try {
      const newImage = await axios.post('/api/file-upload', image);
      dispatch(setImageTest(newImage));
    } catch (err) {
      console.log(err);
    }
  };
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        URL: action.image,
      };
    case SET_IMAGE_TEST:
      return {
        image: action.image,
      };
    default:
      return state;
  }
};

export default imageReducer;
