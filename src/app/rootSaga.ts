import {all} from 'redux-saga/effects';
import {watchGetPosts} from 'features/posts/saga';

export const rootSaga = function* root() {
  yield all([watchGetPosts()]);
};
