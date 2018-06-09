const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env) => ({
  entry: {
    loader: './src/index.tsx',
  },
  // externals are libraries provided to the web application so they don't need to bundle them in the final package
  externals: ['react', 'react-dom', 'antd', 'moment', 'react-router', 'react-router-dom'],
  performance: {
    hints: false
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    library: '[name]',
    libraryTarget: 'amd' // Package individual apps as AMD modules to be loaded by SystemJS
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // Copy some libraries that we just need to include without any modifications
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
    // Our externals need to be bundled as well, this is done via a prebuild NPM script so that it only needs to be done once when working on the project.
    // prebuild step runs the webpack.deps.config.js config which writes a JSON file to depManifest.json so that other webpack compiler processes can access the output.
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
              javascriptEnabled: true,
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

// Custom Webpack Plugin to query for assets built via the prebuild npm script
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