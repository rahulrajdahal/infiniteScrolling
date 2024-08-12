import {useInfiniteQuery, useQueries} from '@tanstack/react-query';
import React, {useMemo, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {colors, sizes} from '../../assets/themes';
import {
  CardSkeleton,
  Header,
  Post as PostComponent,
  PostSeparator,
} from '../components';

export type User = {username: string; id: number};
export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  user?: User;
};

const HomeScreen = () => {
  const [pageParams, setPageParams] = useState({offset: 0, limit: 10});

  const renderSeparator = () => <PostSeparator />;

  const [{data, isLoading, refetch}, {data: users, isLoading: usersIsLoading}] =
    useQueries({
      queries: [
        {
          queryKey: ['fetchPosts'],
          queryFn: async () => {
            const response = await fetch(
              'https://jsonplaceholder.typicode.com/posts',
            );

            return response.json();
          },
        },
        {
          queryKey: ['users'],
          queryFn: async () => {
            const response = await fetch(
              'https://jsonplaceholder.typicode.com/users',
            );

            return response.json();
          },
        },
      ],
    });

  const postData = useMemo(() => {
    return data?.map((post: Post) => ({
      ...post,
      user: users?.find((user: User) => user.id === post.userId),
    }));
  }, [data, users]);

  const {
    data: posts,
    isLoading: postsLoading,
    fetchNextPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery({
    queryKey: ['posts', data, users],
    queryFn: ({pageParam}) => {
      return postData.slice(pageParam.offset, pageParam.limit);
    },
    initialPageParam: pageParams,
    getNextPageParam: () =>
      pageParams.limit < 100 && pageParams.limit > 10
        ? {limit: pageParams.limit + 10, offset: pageParams.offset + 10}
        : undefined,
    getPreviousPageParam: () =>
      pageParams.limit > 10 && pageParams.limit < 100
        ? {limit: pageParams.limit - 10, offset: pageParams.offset - 10}
        : undefined,
  });

  const handleOnEndReached = () => {
    if (posts?.pages && posts?.pages.length > 0) {
      if (pageParams.limit < 100) {
        setPageParams(prev => ({
          offset: prev.offset + 10,
          limit: prev.limit + 10,
        }));
      }
    }
    fetchNextPage();
  };

  return (
    <SafeAreaView style={styles.container}>
      {hasPreviousPage && isFetchingPreviousPage && <CardSkeleton />}
      <FlatList
        data={posts?.pages.flat()}
        renderItem={({item}) =>
          postsLoading || isLoading || usersIsLoading ? (
            <CardSkeleton />
          ) : (
            <PostComponent post={item} />
          )
        }
        refreshing={postsLoading || isLoading || usersIsLoading}
        onRefresh={refetch}
        onEndReachedThreshold={0.7}
        onEndReached={handleOnEndReached}
        keyExtractor={(item, i) =>
          postsLoading || isLoading || usersIsLoading
            ? i.toPrecision()
            : item.id
        }
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          hasNextPage && isFetchingNextPage ? <CardSkeleton /> : null
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizes.appWidth(1),
  },
});
