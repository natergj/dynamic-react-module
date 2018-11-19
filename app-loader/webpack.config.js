const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// externals are libraries provided to the web application via systemjs
const externals = [
  'antd',
  'moment',
  'react-dom',
  'react-router-dom',
  'react',
];

module.exports = (env = process.env.NODE_ENV || 'production') => ({
  entry: {
    loader: './src/loader.ts',
  },
  externals,
  performance: {
    hints: false,
  },
  mode: env,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd', // Package individual apps as UMD modules to be loaded by SystemJS
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // Copy some libraries that we just need to include without any modifications
    new CopyWebpackPlugin(
      [{
          from: 'node_modules/systemjs/dist/system.js',
          to: 'systemjs.[hash].[ext]',
        },
        {
          from: 'node_modules/systemjs/dist/extras/amd.min.js',
          to: 'amd.[hash].[ext]',
        },
        {
          from: `node_modules/react/umd/react.${env === 'development' ? env : 'production.min'}.js`,
          to: 'react.[hash].[ext]',
        },
        {
          from: `node_modules/react-dom/umd/react-dom.${env === 'development' ? env : 'production.min'}.js`,
          to: 'react-dom.[hash].[ext]',
        },
        {
          from: 'node_modules/react-router-dom/umd/react-router-dom.min.js',
          to: 'react-router-dom.[hash].[ext]',
        },
        {
          from: 'node_modules/moment/min/moment-with-locales.min.js',
          to: 'moment.[hash].[ext]',
        },
        {
          from: "node_modules/antd/dist/antd-with-locales.min.js",
          to: "antd.[hash].[ext]"
        },
      ], {
        copyUnmodified: true,
      }
    ),
    new HtmlWebpackPlugin({
      title: 'SystemJs Webpack Project',
      filename: 'index.html',
      template: './src/index.ejs',
      inject: false,
      externals,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  module: {
    rules: [{
        parser: {
          system: false,
        }
      }, {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: env === 'development' ? 'tsconfig.dev.json' : 'tsconfig.prod.json',
        },
      },
      {
        // Use CSS Modules for all application less imports to avoid style naming collisions with app modules
        test: /\.less$/,
        include: (modulePath) => {
          return !modulePath.includes('node_modules') && !modulePath.includes('antStyleOverrides');
        },
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              camelCase: 'dashes',
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        // Disable CSS Modules for all vendor less imports and override files
        test: /\.(css|less)$/,
        include: (modulePath) => {
          return modulePath.includes('node_modules') || modulePath.includes('antStyleOverrides');
        },
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
  devtool: env === 'development' ? 'source-map' : 'none',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    port: 8050,
    host: '127.0.0.1',
    disableHostCheck: true,
    proxy: {
      '/app-module-1': {
        target: 'http://127.0.0.1:8051',
      },
      '/app-module-2': {
        target: 'http://127.0.0.1:8052',
      },
    },
  },
});
