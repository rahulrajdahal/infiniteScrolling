import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';

import {store} from 'app/store';
import Posts from 'screens/Posts';
import {GET_POSTS_LOADING} from 'features/posts/action';

function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
}

export default App;
