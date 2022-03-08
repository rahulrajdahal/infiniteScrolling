import {
  GET_POSTS_FAILURE,
  GET_POSTS_LOADING,
  GET_POSTS_SUCCESS,
} from './action';
import {PostType} from './types';

const initialState: PostType = {data: [], loading: false, error: false};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POSTS_LOADING:
      return {...state, loading: true};

    case GET_POSTS_SUCCESS:
      return {...state, loading: false, data: action.payload};

    case GET_POSTS_FAILURE:
      return {...state, loading: false, error: true};

    default:
      return state;
  }
};

export default postReducer;
