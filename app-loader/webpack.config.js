const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const systemJsExternalsMap = process.env.NODE_ENV === 'production' ? 
  {
    react: 'node_modules/react/umd/react.production.min.js',
    'react-dom': 'node_modules/react-dom/umd/react-dom.production.min.js',
    'react-router-dom': 'node_modules/react-router-dom/umd/react-router-dom.min.js',
    'react-router': 'node_modules/react-router/umd/react-router.min.js',
    antd: 'node_modules/antd/dist/antd-with-locales.min.js',
    moment: 'node_modules/moment/moment.js',
  } :
  {
    react: 'node_modules/react/umd/react.development.js',
    'react-dom': 'node_modules/react-dom/umd/react-dom.development.js',
    'react-router-dom': 'node_modules/react-router-dom/umd/react-router-dom.js',
    'react-router': 'node_modules/react-router/umd/react-router.js',
    antd: 'node_modules/antd/dist/antd-with-locales.min.js',
    moment: 'node_modules/moment/moment.js',
  };

module.exports = {
  entry: { index: './src/index.tsx' },
  performance: { hints: false },
  externals: Object.keys(systemJsExternalsMap),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    libraryTarget: 'amd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new SystemJsBundlerPlugin({
      name: 'vendorBundle',
      dependencyMap: systemJsExternalsMap,
    }),
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
      systemJsExternalsMap, systemJsExternalsMap,
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

function SystemJsBundlerPlugin(options) {
  this.name = options.name || 'systemJsVendorBundle';
  this.dependencyMap = options.dependencyMap || {};
  const bundlerPath = path.resolve(__dirname, 'scripts/build/SystemJsBundler.js');
  this.bundler = child_process.fork(bundlerPath);
}

SystemJsBundlerPlugin.prototype.apply = function(compiler) {
  compiler.plugin('watchRun', () => {
    this.isWatching = true;
  });
  compiler.plugin('watchClose', () => {
    this.bundler.kill();
  });
  compiler.plugin('emit', (compilation, callback) => {
    this.bundler.send({
      mode: compiler.options.mode,
      inputMap: this.dependencyMap,
    });
    this.bundler.on('message', (bundlerOutput) => {
      console.log('message hash', bundlerOutput.hash);
      compilation.assets[`${this.name}.${bundlerOutput.hash}.js`] = {
        source: () => bundlerOutput.source,
        size: () => bundlerOutput.source.length,
      };
      if (!this.isWatching) {
        this.bundler.kill();
      }
      callback();
    });
  });
}