import axios from 'axios';
import {get} from 'lodash';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export default class Api {
  async getPosts() {
    try {
      const res = await axios.get('/posts');
    //   console.log('GET POSTS API response', res);
      const data = get(res, 'data');
      return data;
    } catch (e) {
      console.log('GET POSTS API error', e);
      throw e;
    }
  }
}
