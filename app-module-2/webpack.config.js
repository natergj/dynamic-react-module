const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const os = require('os');
const webpack = require('webpack');

module.exports = {
  entry: { index: './src/index.tsx' },
  performance: { hints: false },
  externals: ['react', 'react-dom', 'antd', 'moment'],
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'amd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
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
    port: 8052,
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
  }
}
