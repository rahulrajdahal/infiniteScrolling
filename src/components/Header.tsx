import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LogoIcon, MenuIcon} from '../../assets/icons';
import {colors, sizes} from '../../assets/themes';

const Header = () => {
  return (
    <View style={styles.container}>
      <LogoIcon />
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
