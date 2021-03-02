/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 13:22:10
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:19:07
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { fetchHomeData, fetchDetails, fetchSearchList, fetchHotKeywords } from '../api';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: () => ({
      // 首页数据
      homeData: [],
      // 热搜关键字
      hotKeywords: [],
      // 搜索列表
      searchList: [],
      // 详情
      details: {}
    }),

    mutations: {
      setHomeData(state, data) {
        state.homeData = data;
      },
      setDetails(state, data) {
        state.details = data;
      },
      setSearchList(state, data) {
        state.searchList = data;
      },
      setHotKeywords(state, data) {
        state.hotKeywords = data;
      }
    },

    actions: {
      // 首页数据
      fetchHomeData({ commit }) {
        return fetchHomeData().then(data => {
          commit('setHomeData', data);
        });
      },

      // 获取详情
      fetchDetails({ commit }, params) {
        return fetchDetails(params).then(data => {
          commit('setDetails', data);
        });
      },

      // 获取搜索列表
      fetchSearchList({ commit }, keyword) {
        return fetchSearchList(keyword).then(data => {
          commit('setSearchList', data);
        });
      },

      // 获取热搜关键字
      fetchHotKeywords({ commit, state }) {
        // 当热搜关键字为空的时候才请求接口
        if (state.hotKeywords.length === 0) {
          fetchHotKeywords().then(data => {
            commit('setHotKeywords', data);
          });
        }
      }

    },

    modules: {
    }
  });
}
