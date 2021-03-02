/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 18:05:35
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:34:35
 */
import axios from 'axios';
// import sessionService from '@/common/service/sessionService';

// 页面接口fetch用的axios
const request = axios.create({
  timeout: 1000 * 30
});

/**
 * 获取token
 * 如果session里面有token，则使用，否者重新请求token
 */
function getToken() {
  return new Promise((resolve) => {
    axios.get('http://api.vopipi.cn/api/auth').then(res => {
      const token = res.data.data.token;
      // sessionService.set('token', token);
      resolve(token);
    });
    // const token = sessionService.get('token');
    // if (token) {
    //   resolve(token);
    // } else {
    //   axios.get('http://api.vopipi.cn/api/auth').then(res => {
    //     const token = res.data.data.token;
    //     sessionService.set('token', token);
    //     resolve(token);
    //   });
    // }
  });
}

// 请求拦截器
request.interceptors.request.use(async config => {
  config.headers.token = await getToken();
  return config;
}, error => {
  return Promise.reject(error);
});

// 返回拦截器
request.interceptors.response.use(response => {
  if (response.status === 200) {
    if (response.data.code === '10000') {
      return response.data.data;
    } else {
      return null;
    }
  } else {
    console.log(new Error('出错了'));
  }
}, error => {
  // sessionService.remove('token');
  // location.reload();
  return Promise.reject(error.response.status);
});

// 请求基础api
class ApiHelper {
  get(_url, _params) {
    return new Promise((resolve, reject) => {
      request.get(_url, { params: _params })
        .then(response => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default new ApiHelper();
