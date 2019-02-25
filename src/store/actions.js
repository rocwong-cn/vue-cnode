import Vue from 'vue';
import * as types from './mutation-types';
import { TOPICS } from '../api/config';

export const loadTopics = ({ commit }, args) => {
  let str = Object.entries(args).map(([key, value]) => `${key}=${value}&`);
  console.log(str);
  str = str.join('');
  str = str.substring(0, str.length - 1);
  let api = `${TOPICS}?${str}`;
  Vue.axios.get(api).then((res) => {
    commit(types.LOAD_TOPICS, res.data);
  });
};
