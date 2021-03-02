/*
 * @Description:
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2021-02-26 14:16:35
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-02 13:45:07
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const { createBundleRenderer } = require('vue-server-renderer');

const app = express();

// 读取模板
const template = fs.readFileSync(path.resolve(__dirname, '../src/template.html'), 'utf-8');
// 服务端渲染清单
const serverBundle = require('../dist/vue-ssr-server-bundle.json');
// 客户端渲染清单
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // 推荐
  template,
  clientManifest
});

app.use('/js', express.static(path.join(__dirname, '../dist/js')));
app.use('/css', express.static(path.join(__dirname, '../dist/css')));
app.use('/img', express.static(path.join(__dirname, '../dist/img')));
app.use(express.static('static'));

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const context = { url: req.url };
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.url) {
        res.redirect(err.url);
      } else {
        res.status(500).end('500 | 服务器错误');
        console.error(`${req.url}: 渲染错误 `);
        console.error(err.stack);
      }
    }
    res.status(context.HTTPStatus || 200);
    res.send(html);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`服务已经启动: http://localhost:${port}/`);
})
;
