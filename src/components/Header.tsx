import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {LogoIcon, MenuIcon} from '../../assets/icons';
import {colors, sizes} from '../../assets/themes';

interface HeaderProps {
  postListRef: React.RefObject<FlatList<any>>;
}

const Header = ({postListRef}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          postListRef.current?.scrollToIndex({
            index: 0,
            viewOffset: sizes.appHeight(8),
          })
        }>
        <LogoIcon />
      </TouchableOpacity>
      <MenuIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: sizes.appHeight(1.5),
    paddingTop: sizes.appHeight(2.5),
    backgroundColor: colors.white,
  },
});
