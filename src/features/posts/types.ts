import {IPostProps} from 'components/cards/Post';

export type PostType = {
  data: Array<IPostProps>;
  loading: boolean;
  error: boolean;
};
