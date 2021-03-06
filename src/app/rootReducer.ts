import {combineReducers} from 'redux';
import postReducer from 'features/posts/reducer';

export const rootReducer = combineReducers({
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
