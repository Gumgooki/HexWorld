import { combineReducers } from 'redux';
import image from './image.js';
import hexChanger from './hex-changer.js';

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...

const appReducer = combineReducers({
  image,
  hexChanger,
});
// const appReducer = combineReducers({
// robots,
// projects,
// })

export default appReducer;
