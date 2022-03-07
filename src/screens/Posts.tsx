import {GET_POSTS_LOADING} from 'features/posts/action';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_POSTS_LOADING});
  }, [dispatch]);

  const postState = useSelector((state: any) => state.posts);

  return (
    <View>
      {postState.data.map((item: any) => (
        <Text key={item.id}>{item.body}</Text>
      ))}
    </View>
  );
}

export default Posts;
