'use strict';

let webpackConfig = require('ngx-webpack').webpack({
  port: 3000
});
webpackConfig.module.rules.push({
  test: /\.png$/,
  loader: 'file-loader'
});

module.exports = webpackConfig;
