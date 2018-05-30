const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    loader: './src/index.tsx',
    antd: 'antd',
    moment: 'moment',
    react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    'react-router': 'react-router',
  },
  performance: { hints: false },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    library: '[name]',
    libraryTarget: 'amd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        {
          from: 'node_modules/systemjs/dist/system-production.js',
          to: '[name].[hash].[ext]',
          toType: 'template',
          force: true,
        }
      ],
      { copyUnmodified: true },
    ),
    new HtmlWebpackPlugin({
      title: 'SystemJs Webpack Project',
      filename: 'index.html',
      template: './src/index.ejs',
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              inlineJavaScript: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    port: 8085,
    proxy: {
      '/app-module-1': {
        target: 'http://127.0.0.1:8081',
        pathRewrite: {"^/app-module-1" : "" },
      },
      '/app-module-2': {
        target: 'http://127.0.0.1:8082',
        pathRewrite: {"^/app-module-2" : "" },
      },
    }
  }
}
