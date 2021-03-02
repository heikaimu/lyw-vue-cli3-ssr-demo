/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 13:22:10
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:16:39
 */
import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload';
import './common/scss/index.scss';

Vue.use(ElementUI);

const LOADING_IMG = require('@/assets/loading_w.png');
const ERROR_IMG = require('@/assets/image_error.png');
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: ERROR_IMG,
  loading: LOADING_IMG,
  attempt: 1
});

Vue.config.productionTip = false;

export function createApp() {
  // 创建 router 和 store 实例
  const router = createRouter();
  const store = createStore();

  // 同步路由状态(route state)到 store
  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
}
