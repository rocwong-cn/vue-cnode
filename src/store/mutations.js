/* eslint-disable import/prefer-default-export */
import * as types from './mutation-types';

export const mutations = {
  [types.LOAD_TOPICS](state, payload) {
    if (payload.isFirst) {
      state.topics = payload.topics;
    } else {
      state.topics = state.topics.concat(payload.topics);
    }
    state.page = payload.page;
  },
};
