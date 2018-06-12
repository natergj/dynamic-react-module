const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const crypto = require('crypto');
const {
  ManifestPlugin,
  SquashBundlePlugin,
  SystemJsBundlerPlugin,
} = require('./build_tools/webpackPlugins');

module.exports = (env = process.env.NODE_ENV || 'production') => {
  const systemJsDepMap = env === 'production' ? {
    react: 'node_modules/react/umd/react.production.min.js',
    'react-dom': 'node_modules/react-dom/umd/react-dom.production.min.js',
  } : {
    react: 'node_modules/react/umd/react.development.js',
    'react-dom': 'node_modules/react-dom/umd/react-dom.development.js',
  };

  return {
    mode: env,
    performance: {
      hints: false
    },
    entry: {
      antd: 'antd',
      moment: 'moment',
      'react-router': 'react-router',
      'react-router-dom': 'react-router-dom',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      library: '[name]',
      libraryTarget: 'amd',
    },
    externals: ['react', 'react-dom'],
    plugins: [
      new SystemJsBundlerPlugin({
        name: 'reactBundle',
        dependencyMap: systemJsDepMap,
      }),
      new SquashBundlePlugin({
        name: 'vendorBundle'
      }),
      new ManifestPlugin({
        filename: 'libManifest.json',
        systemJsDepMap,
      }),
    ]
  };
}