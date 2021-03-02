/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 15:48:28
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-01 14:09:58
 */
import apiHelper from './request';

/**
 * 首页数据
 * @returns {Promise}
 */
export function fetchHomeData() {
  return apiHelper.get('http://api.vopipi.cn/api/index');
}

/**
 * 热搜关键字
 * @returns {Promise}
 */
export function fetchHotKeywords() {
  return apiHelper.get('http://api.vopipi.cn/api/hot');
}

/**
 * 关键字搜索
 * @param {String} keyword - 搜索关键字
 * @returns {Promise}
 */
export function fetchSearchList(keyword) {
  return apiHelper.get(`http://api.vopipi.cn/api/search?wd=${keyword}`);
}

/**
 * 资源详情
 * @param {Object} params
 * @param {Number} params.type - 类型：1.电影，2.电视剧，3.综艺，4.动漫
 * @param {String} params.onlyStr - 标识符
 * @returns {Promise}
 */
export function fetchDetails(params) {
  return apiHelper.get('http://api.vopipi.cn/api/info', params);
}
