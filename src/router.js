import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import iView from 'iview';
import animated from 'animate.css';
import Home from './views/Home.vue';

Vue.use(Router);
Vue.use(iView);
Vue.use(animated);
// Add a response interceptor
// eslint-disable-next-line
axios.interceptors.response.use((response) => {
  return Promise.resolve(response.data);
}, (error) => {
  Vue.prototype.$Message.error('老铁，你的网络不给力啊');
  return Promise.reject(error);
});
Vue.use(VueAxios, axios);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
