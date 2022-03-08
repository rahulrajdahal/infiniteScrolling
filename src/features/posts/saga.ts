import Api from 'app/api';
import {
  all,
  call,
  fork,
  put,
  SagaReturnType,
  takeLatest,
} from 'redux-saga/effects';
import {GET_POSTS_LOADING, GET_POSTS_SUCCESS} from './action';

const api = new Api();

function* getPostsAsync() {
  try {
    const res: SagaReturnType<any> = yield call(api.getPosts);
    yield put({type: GET_POSTS_SUCCESS, payload: res});
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS_LOADING, getPostsAsync);
}
