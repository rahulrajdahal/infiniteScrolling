import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

// design frames
const frameWidth = 375;
const frameHeight = 812;

const screenWidth = width / frameWidth;
const screenHeight = height / frameHeight;

export default {
  title: screenWidth * 20,
  body: screenWidth * 14,
  caption: screenWidth * 13,
  width,
  height,
  screenWidth,
  screenHeight,
};
