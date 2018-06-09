const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const crypto = require('crypto');

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
        filename: 'depManifest.json',
        systemJsDepMap,
      }),
    ]
  };
}

// Custom webpack plugin to write information about the output of this
// compiler process to a json file that can be read by other compiler processes.
class ManifestPlugin {
  constructor(options = {}) {
    const {
      filename,
      ...otherOpts
    } = options;
    this.filename = filename ? filename : 'assetManifest.json';
    this.manifest = otherOpts;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('writeManifest', (compilation, callback) => {
      this.manifest.assets = {};
      this.manifest = Object.keys(compilation.assets).reduce((manifest, assetFile) => {
        const modName = assetFile.split('.').slice(0, -2);
        manifest.assets[modName] = assetFile;
        return manifest;
      }, this.manifest);

      child_process.execSync(`mkdir -p ${compilation.options.output.path}`);
      fs.writeFile(
        path.resolve(compilation.options.output.path, this.filename),
        JSON.stringify(this.manifest, null, '  '), {
          encoding: 'utf-8'
        },
        callback,
      )
    });
  }
}

// Custom webpack plugin to take all entry points and squash the code into single file.
class SquashBundlePlugin {
  constructor(options) {
    this.name = options.name ? options.name : 'vendor';
  }

  apply(compiler) {
    compiler.hooks.afterCompile.tap('squash', (compilation) => {
      const squashedSource = Object.keys(compilation.assets)
        .reduce((squash, asset) => {
          if (asset !== this.name) {
            squash = squash + compilation.assets[asset].source();
          }
          return squash;
        }, '');
      const contentHash = crypto.createHash('md5').update(squashedSource).digest("hex");
      compilation.assets = {};
      compilation.assets[`${this.name}.${contentHash}.js`] = {
        source: () => squashedSource,
        size: () => squashedSource.length,
      }
    });
  }
}

// Custom webpack plugin to create a SystemJS bundle of react and react-dom so they can be loaded as ES6 modules
class SystemJsBundlerPlugin {
  constructor(options) {
    const bundlerPath = path.resolve(__dirname, 'scripts/build/SystemJsBundler.js');
    this.bundler = child_process.fork(bundlerPath);

    this.name = options.name || 'systemJsVendorBundle';
    this.dependencyMap = options.dependencyMap || {};
  }

  apply(compiler) {

    compiler.hooks.watchRun.tap('watchRun', () => {
      this.isWatching = true;
    });

    compiler.hooks.watchClose.tap('watchClose', () => {
      this.bundler.kill();
    });

    compiler.hooks.emit.tapAsync('createBundle', (compilation, callback) => {
      this.bundler.send({
        mode: compiler.options.mode,
        inputMap: this.dependencyMap,
      });
      this.bundler.on('message', (bundlerOutput) => {
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
}