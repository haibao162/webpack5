const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./webpack.config.dev.js');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');

const config = {
    entry: [
        // ģ�����滻������ʱ����
        // 'webpack/hot/dev-server.js',
        // ���� web �׽��ִ��䡢�������߼��� web server �ͻ���
        // 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
        // ���������
        './src/index.js',
    ],
    plugins: [
        // ģ�����滻�Ĳ��
        // new webpack.HotModuleReplacementPlugin(),
    ],
    
};
const compiler = webpack(merge(devConfig, config));

// �����ֶ������ `hot` �� `client` �������佫������
const server = new webpackDevServer({ hot: true }, compiler);

(async () => {
    await server.start();
    console.log('dev server ��������');
})();