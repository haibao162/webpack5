const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.config.dev.js');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');

const config = {
    entry: [
        // 模块热替换的运行时代码
        // 'webpack/hot/dev-server.js',
        // 用于 web 套接字传输、热重载逻辑的 web server 客户端
        // 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
        // 你的入口起点
        './src/index.js',
    ],
    plugins: [
        // 模块热替换的插件
        // new webpack.HotModuleReplacementPlugin(),
    ],
    
};
const compiler = webpack(merge(devConfig, config));

// 由于手动添加了 `hot` 与 `client` 参数，其将被禁用
const server = new webpackDevServer({ hot: true }, compiler);

(async () => {
    await server.start();
    console.log('dev server 正在运行');
})();