import * as types from './mutation-types';

export const mutations = {
  [types.LOAD_TOPICS](state, topics) {
    state.topics = topics;
  },
};
