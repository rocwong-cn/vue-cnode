import Vue from 'vue';
import * as types from './mutation-types';
import { TOPICS } from '../api/config';

export const loadTopics = ({ commit }, args) => {
  let str = Object.entries(args).map(([key, value]) => `${key}=${value}&`);
  str = str.join('');
  str = str.substring(0, str.length - 1);
  const api = `${TOPICS}?${str}`;
  Vue.axios.get(api).then((res) => {
    const page = args.page + 1;
    const payload = {
      topics: res.data,
      page,
      isFirst: args.page === 1,
    };
    commit(types.LOAD_TOPICS, payload);
  });
};
