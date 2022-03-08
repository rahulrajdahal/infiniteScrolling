import React, {Dispatch, DispatchWithoutAction, memo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {connect, RootStateOrAny} from 'react-redux';
import styled from 'styled-components/native';
import tw from 'tailwind-react-native-classnames';

import {Logo} from 'assets/icons';
import {PostCard, PostSkeletonCard} from 'components';
import {GET_POSTS_LOADING} from 'features/posts/action';
import {colors} from 'theme';
import {PostType} from 'features/posts/types';
import {IPostProps} from 'components/cards/Post';

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

type PostScreenType = {posts?: PostType | null};

function PostScreen({posts}: PostScreenType) {
  const [limit, setLimit] = useState<number>(5);

  const onEndReached = () => setLimit(limit + 5);

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

  const footer = () => (
    <View style={{backgroundColor: colors.white, paddingHorizontal: 16}}>
      <PostSkeletonCard />
    </View>
  );

  return posts?.loading ? (
    Array.from(Array(5), (_, i) => <PostSkeletonCard key={i} />)
  ) : (
    <FlatList
      ListHeaderComponent={header}
      stickyHeaderIndices={[0]}
      data={posts?.data.slice(0, limit)}
      renderItem={renderItem}
      keyExtractor={(_, index) => String(index)}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.7}
      onEndReached={onEndReached}
      ListFooterComponent={footer}
    />
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {posts: state.posts};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  dispatch({type: GET_POSTS_LOADING});

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen as any);
