import React, {memo} from 'react';
import {Image, StyleSheet, Text, View, ViewProps} from 'react-native';
import {four, one, three, two} from '../../assets/images';
import {colors, sizes} from '../../assets/themes';
import {type Post as PostType} from '../screens/HomeScreen';

interface PostProps extends ViewProps {
  post: PostType;
}

const Post = memo(({post}: Readonly<PostProps>) => {
  const {id, body, user, title} = post;

  const getImage = () => {
    if (id % 4 === 0) {
      return four;
    } else if (id % 3 === 0) {
      return three;
    } else if (id % 2 === 0) {
      return two;
    } else {
      return one;
    }
  };

  return (
    <View key={id} style={styles.container}>
      <Image source={getImage()} width={24} height={24} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <View style={styles.hr} />

      <View style={styles.footerContainer}>
        <Text style={styles.label}>
          ID:
          <Text style={styles.value}>{id < 10 ? `0${id}` : id}</Text>
        </Text>
        <Text style={styles.label}>
          User:
          <Text style={styles.value}>{user?.username}</Text>
        </Text>
      </View>
    </View>
  );
});

export default Post;

const styles = StyleSheet.create({
  container: {
    gap: sizes.appHeight(0.75),
    paddingHorizontal: sizes.appWidth(0.75),
  },
  image: {
    width: '100%',
    height: sizes.appHeight(10),
    maxWidth: sizes.appWidth(19.9375),
    borderRadius: sizes.appWidth(0.5),
  },
  title: {
    color: colors.grey[900],
    fontSize: sizes.appWidth(1.25),
    fontWeight: '500',
    lineHeight: sizes.appWidth(1.75),
  },
  body: {
    color: colors.grey[700],
    fontSize: sizes.appWidth(0.875),
    fontWeight: '400',
    lineHeight: sizes.appWidth(1.25),
  },
  hr: {
    height: sizes.appHeight(0.0625),
    width: '100%',
    backgroundColor: colors.grey[300],
  },
  footerContainer: {gap: sizes.appWidth(2), flexDirection: 'row'},
  label: {
    fontSize: sizes.appWidth(0.8125),
    lineHeight: sizes.appWidth(1.125),
    fontWeight: '400',
    color: colors.grey[700],
  },
  value: {fontWeight: '700', color: colors.grey[900]},
});
