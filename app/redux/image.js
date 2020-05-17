const axios = require('axios');

const SET_IMAGE = 'SET_IMAGE';

const initialState = {};

export const setImage = function (image) {
  return {
    type: SET_IMAGE,
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

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return {
        URL: action.image,
      };
    default:
      return state;
  }
};

export default imageReducer;
