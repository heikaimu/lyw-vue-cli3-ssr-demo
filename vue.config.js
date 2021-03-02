/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 13:31:12
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 14:05:16
 */
const ServerPlugin = require('vue-server-renderer/server-plugin'); const // 生成服务端清单
  ClientPlugin = require('vue-server-renderer/client-plugin'); const // 生成客户端清单
  nodeExternals = require('webpack-node-externals'); const // 忽略node_modules文件夹中的所有模块
  VUE_NODE = process.env.VUE_NODE === 'node';
const entry = VUE_NODE ? 'server' : 'client';// 根据环境变量来指向入口

module.exports = {

  lintOnSave: false,

  css: {
    extract: false // 关闭提取css,不关闭 node渲染会报错
  },

  configureWebpack: () => ({
    // 入口文件
    entry: `./src/entry-${entry}.js`,
    // 出口
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
      libraryTarget: VUE_NODE ? 'commonjs2' : undefined
    },
    target: VUE_NODE ? 'node' : 'web',
    node: VUE_NODE ? undefined : false,
    externals: VUE_NODE ? nodeExternals({
      // 设置白名单
      allowlist: /\.css$/
    }) : undefined,
    // !!!!!!不加会报错（服务器端包应该有一个条目文件。避免在服务器配置中使用CommonsChunkPlugin）
    optimization: { splitChunks: VUE_NODE ? false : undefined },
    plugins: [// 根据环境来生成不同的清单。
      VUE_NODE ? new ServerPlugin() : new ClientPlugin()
    ]
  }),

  chainWebpack: config => {
    config.resolve
      .alias
      .set('vue$', 'vue/dist/vue.esm.js');
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.optimizeSSR = false;
        return options;
      });
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        options = {
          limit: 1024,
          fallback: 'file-loader?name=img/[path][name].[ext]'
        };
        return options;
      });
  }

};
