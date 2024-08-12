import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const frameWidth = 23.4375;
const frameHeight = 50.75;

const appWidth = (input: number) => width * (input / frameWidth);
const appHeight = (input: number) => height * (input / frameHeight);

export const sizes = {
  width,
  height,
  appWidth,
  appHeight,
};
