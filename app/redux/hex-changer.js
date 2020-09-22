const SET_HEX_SIZE = 'SET_HEX_SIZE';

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

const hexReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEX_SIZE:
      return {
        ...state,
        testNumber: action.hexSize,
      };
    default:
      return state;
  }
};

export default hexReducer;
