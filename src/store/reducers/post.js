import {ADD_FILTER, LOAD_POSTS, TOGGLE_LIKED} from '../types';

const initialState = {
  allPosts: [],
  likedPosts: [],
  filterArrList: [
    {id: '1', animalType: 'Cats'},
    {id: '2', animalType: 'Dogs'},
    {id: '3', animalType: 'Birds'},
    {id: '4', animalType: 'Other'},
  ],
  filterArr: [],
  loadingData: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        allPosts: action.payload,
        likedPosts: action.payload.filter((post) => post.liked),
        loadingData: false,
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
    case ADD_FILTER:
      const arr = state.filterArr.slice(0);

      if (arr.indexOf(action.payload) != -1) {
        arr.splice(arr.indexOf(action.payload), 1);
      } else {
        arr.push(action.payload);
      }

      return {
        ...state,
        filterArr: [...arr],
      };
    default:
      return state;
  }
};
