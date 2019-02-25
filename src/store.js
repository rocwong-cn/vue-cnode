import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './store/actions';
import { mutations } from './store/mutations';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

// 保存应用启动时的初始状态
const state = {
  topics: [],
};
export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
