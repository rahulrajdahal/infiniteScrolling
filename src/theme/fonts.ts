import colors from './colors';
import sizes from './sizes';

export default {
  title: {
    fontFamily: 'PlusJakartaSans',
    fontSize: `${sizes.title}px`,
    lineHeight: `${sizes.screenHeight * 28}px`,
    color: colors.grey900,
    fontWeight: 500,
  },
  body: {
    fontFamily: 'PlusJakartaSans',
    fontSize: `${sizes.body}px`,
    lineHeight: `${sizes.screenHeight * 20}px`,
    color: colors.grey700,
    fontWeight: 400,
  },
  caption: {
    fontFamily: 'PlusJakartaSans',
    fontSize: `${sizes.caption}px`,
    lineHeight: `${sizes.screenHeight * 18}px`,
    color: colors.grey700,
    fontWeight: 400,
  },
};
