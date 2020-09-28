const SET_HEX_SIZE = 'SET_HEX_SIZE';
const SET_X_INPUT = 'SET_X_INPUT';
const SET_Y_INPUT = 'SET_Y_INPUT';
const SET_HEX_COLOR = 'SET_HEX_COLOR';
const SET_HEX_NAME_COLOR = 'SET_HEX_NAME_COLOR';
const SET_IMAGE_HUE_COLOR = 'SET_IMAGE_HUE_COLOR';

const initialState = {
  testNumber: 1,
  hexColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  hexNameColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  imageHue: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
  gridY: 0,
  gridX: 0,
};

export const setHexSize = function (hexSize) {
  return {
    type: SET_HEX_SIZE,
    hexSize,
  };
};

export const fetchHexSize = function (hexSize) {
  return async (dispatch) => {
    try {
      dispatch(setHexSize(hexSize));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setXInput = function (xInput) {
  return {
    type: SET_X_INPUT,
    xInput,
  };
};

export const fetchXInput = function (xInput) {
  return async (dispatch) => {
    try {
      dispatch(setXInput(xInput));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setYInput = function (yInput) {
  return {
    type: SET_Y_INPUT,
    yInput,
  };
};

export const fetchYInput = function (yInput) {
  return async (dispatch) => {
    try {
      dispatch(setYInput(yInput));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setHexColor = function (hexColor) {
  return {
    type: SET_HEX_COLOR,
    hexColor,
  };
};

export const fetchHexColor = function (hexColor) {
  return async (dispatch) => {
    try {
      dispatch(setHexColor(hexColor));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setHexNameColor = function (hexNameColor) {
  return {
    type: SET_HEX_NAME_COLOR,
    hexNameColor,
  };
};

export const fetchHexNameColor = function (hexNameColor) {
  return async (dispatch) => {
    try {
      dispatch(setHexNameColor(hexNameColor));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setImageHue = function (imageHue) {
  return {
    type: SET_IMAGE_HUE_COLOR,
    imageHue,
  };
};

export const fetchImageHue = function (imageHue) {
  return async (dispatch) => {
    try {
      dispatch(setImageHue(imageHue));
    } catch (err) {
      console.log(err);
    }
  };
};
const hexReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEX_SIZE:
      return {
        ...state,
        testNumber: action.hexSize,
      };
    case SET_X_INPUT:
      return {
        ...state,
        gridX: action.xInput,
      };
    case SET_Y_INPUT:
      return {
        ...state,
        gridY: action.yInput,
      };
    case SET_HEX_COLOR:
      return {
        ...state,
        hexColor: action.hexColor,
      };
    case SET_HEX_NAME_COLOR:
      return {
        ...state,
        hexNameColor: action.hexNameColor,
      };
    case SET_IMAGE_HUE_COLOR:
      return {
        ...state,
        imageHue: action.imageHue,
      };
    default:
      return state;
  }
};

export default hexReducer;
