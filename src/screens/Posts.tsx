import {Logo} from 'assets/icons';
import {PostCard, PostSkeletonCard} from 'components';
import {GET_POSTS_LOADING} from 'features/posts/action';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import tw from 'tailwind-react-native-classnames';
import {colors, sizes} from 'theme';

const Container = styled.View`
  ${tw`
    px-4
  `};
  background: ${colors.white};
`;

const HeaderContainer = styled.View`
  ${tw`
    flex-row
    w-full
    items-center
    justify-between
    h-20
    p-4
`};
  background: ${colors.white};
`;

const Eclipse = styled.View`
  ${tw`
    w-6
    h-6
    rounded-full
`};
  background: ${colors.grey200};
`;
function Posts() {
  const dispatch = useDispatch();
  const postState = useSelector((state: any) => state.posts);

  const [posts, setPosts] = useState<any>(postState.data);
  useEffect(() => {
    try {
      getPosts();
    } catch (e) {
      console.log('effect', e);
    }
  }, []);

  console.log(posts[0]);

  const getPosts = () => {
    dispatch({type: GET_POSTS_LOADING});
    setPosts([...posts, postState.data]);
  };

  const onEndReached = () => {
    dispatch({type: GET_POSTS_LOADING});
  };

  const header = () => (
    <HeaderContainer>
      <Logo />
      <Eclipse />
    </HeaderContainer>
  );
  const renderItem = ({item}: any) => (
    <Container>
      <PostCard post={item} />
    </Container>
  );

  return (
    // <FlatList
    //   ListHeaderComponent={header}
    //   stickyHeaderIndices={[0]}
    //   data={posts}
    //   renderItem={renderItem}
    //   keyExtractor={(_, index) => String(index)}
    //   showsVerticalScrollIndicator={false}
    //   onEndReached={onEndReached}
    //   onEndReachedThreshold={0}
    //   ListFooterComponent={
    //     <View style={{backgroundColor: colors.white}}>
    //       <ActivityIndicator />
    //     </View>
    //   }
    // />
    <>
      <PostSkeletonCard />
      <PostSkeletonCard />
      <PostSkeletonCard />
    </>
  );
}

export default Posts;
