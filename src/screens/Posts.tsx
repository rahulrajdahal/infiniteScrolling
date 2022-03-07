import {PostCard} from 'components';
import {GET_POSTS_LOADING} from 'features/posts/action';
import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import tw from 'tailwind-react-native-classnames';
import {colors} from 'theme';

const Container = styled.View`
  ${tw`
    m-4
  `};
  background: ${colors.white};
`;
function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: GET_POSTS_LOADING});
  }, [dispatch]);

  const postState = useSelector((state: any) => state.posts);

  const renderItem = ({item}: any) => <PostCard post={item} />;

  return (
    <Container>
      <FlatList
        data={postState.data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default Posts;
