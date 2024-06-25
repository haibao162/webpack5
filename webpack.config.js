const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //   entry: {
    //     index: './src/index.js',
    //     print: './src/print.js',
    //   },
    mode: 'development',
    entry: {
        customPage:  './src/index.js',
        //     index: './src/index.js',
        //     print: './src/print.js',
    },
    devtool: 'inline-source-map', // 追踪错误与警告在源代码中的原始位置, 不要在生产环境中使用它
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader || 'style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single', // 将 runtime 代码拆分为一个单独的 chunk
        moduleIds: 'deterministic', // vendor 的哈希值都应保持一致
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
          },
    },
    plugins: [
        // 所有的 bundle 都已自动添加到其中。默认生成一个index.html
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new MiniCssExtractPlugin(),
    ],
};