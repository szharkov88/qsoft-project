import {LOAD_POSTS} from '../types';

const initialState = {
  allPosts: [],
  likedPosts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        likedPosts: action.payload.filter((post) => post.liked),
      };
    default:
      return state;
  }
};
