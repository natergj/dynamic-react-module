const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  entry: {
    loader: './src/index.tsx',
  },
  externals: ['react', 'react-dom', 'antd', 'moment', 'react-router', 'react-router-dom'],
  performance: {
    hints: false
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    library: '[name]',
    libraryTarget: 'amd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin(
      [{
        from: 'node_modules/systemjs/dist/system-production.js',
        to: '[name].[hash].[ext]',
        toType: 'template',
        force: true,
      }, {
        from: 'node_modules/babel-polyfill/dist/polyfill.min.js',
        to: 'babel-polyfill.[hash].[ext]',
        toType: 'template',
        force: true,
      }, ], {
        copyUnmodified: true
      },
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
    new LoadDependencyManifestPlugin({
      manifestFile: 'depManifest.json',
    }),
  ],
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
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
    port: 8050,
    proxy: {
      '/app-module-1': {
        target: 'http://127.0.0.1:8051',
        pathRewrite: {
          "^/app-module-1": ""
        },
      },
      '/app-module-2': {
        target: 'http://127.0.0.1:8052',
        pathRewrite: {
          "^/app-module-2": ""
        },
      },
    }
  }
});

class LoadDependencyManifestPlugin {
  constructor(options = {}) {
    this.manifestFile = options.manifestFile;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('AddManifestToHtmlPluginData', (compilation) => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync('AddManifest', (htmlPluginData, callback) => {
        const manifestFile = path.resolve(compilation.outputOptions.path, this.manifestFile);
        const manifest = JSON.parse(fs.readFileSync(manifestFile), {
          encoding: 'utf-8'
        });
        htmlPluginData.assets.dependencyManifest = manifest;
        callback(null, htmlPluginData);
      });
    })
  }
}