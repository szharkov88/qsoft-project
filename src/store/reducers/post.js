import {LOAD_POSTS, TOGGLE_LIKED} from '../types';

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
    case TOGGLE_LIKED:
      const allPosts = state.allPosts.map((post) => {
        if (post.id === action.payload) {
          post.liked = !post.liked;
        }
        return post;
      });

      return {
        ...state,
        allPosts,
        likedPosts: allPosts.filter((post) => post.liked),
      };
    default:
      return state;
  }
};
