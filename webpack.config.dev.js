const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devServerConfig = {
    static: './dist',
    hot: true,
};

const env = process.env.NODE_ENV;

module.exports = {
    //   entry: {
    //     index: './src/index.js',
    //     print: './src/print.js',
    //   },
    mode: 'development',
    entry: {
        customPage: './src/index.js',
        //     index: './src/index.js',
        //     print: './src/print.js',
    },
    devtool: 'inline-source-map', // 追踪错误与警告在源代码中的原始位置, 不要在生产环境中使用它
    output: {
        filename: '[name].[contenthash].js',
        // path: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, "dist", "dev"),
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                        cacheDirectory: true,
                        // plugins: ['@babel/plugin-proposal-object-rest-spread'],
                    },
                },
            },
            {
                test: /\.ts|tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [env == "local" ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
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
                react: { 
                    name: "react",
                    test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
                    chunks: "all",
                    minChunks: 1,
                    priority: 30,//打包权重
                    reuseExistingChunk: true
          
                  },
                  lodash: { //减小代码体积-reac-dom react-router-dom一起打包成单独文件
                    name: "lodash",
                    test: /[\\/]node_modules[\\/]lodash(.*)?[\\/]/,
                    chunks: "all",
                    minChunks: 1,
                    priority: 50,//打包权重
                    reuseExistingChunk: true
          
                  },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -20,//打包权重
                    
                },
            },
        },
        minimize: true,
    },
    plugins: [
        // 所有的 bundle 都已自动添加到其中。默认生成一个index.html
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./src/index.html",
			inject: "body",
			filename: "index.html", //输出html文件的位置
        }),
        new MiniCssExtractPlugin(),
    ],
};