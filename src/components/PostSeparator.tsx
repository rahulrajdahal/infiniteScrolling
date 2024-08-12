import React from 'react';
import {StyleSheet, View} from 'react-native';
import {sizes} from '../../assets/themes';

const PostSeparator = () => {
  return <View style={styles.container} />;
};

export default PostSeparator;

const styles = StyleSheet.create({
  container: {height: sizes.appHeight(1.5)},
});
