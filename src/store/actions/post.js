import {ADD_FILTER, LOAD_POSTS, TOGGLE_LIKED} from '../types';
import {DATA} from '../../../assets/data/data';

export const loadPosts = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: LOAD_POSTS,
        payload: DATA,
      });
    }, 2000);
  };
};

export const toogleLiked = (id) => {
  return {
    type: TOGGLE_LIKED,
    payload: id,
  };
};

export const addFilter = (filterName) => {
  return {
    type: ADD_FILTER,
    payload: filterName,
  };
};
