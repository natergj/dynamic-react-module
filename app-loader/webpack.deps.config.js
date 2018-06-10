const path = require('path');
const fs = require('fs');
const child_process = require('child_process');
const crypto = require('crypto');

module.exports = (env) => [libConfig(env), reactConfig(env)];

const reactConfig = (env = process.env.NODE_ENV || 'production') => {
  return {
    mode: env,
    performance: {
      hints: false,
    },
    entry: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      library: '[name]',
      libraryTarget: 'amd',
    },
    plugins: [
      new SquashBundlePlugin({
        name: 'reactBundle'
      }),
      new ManifestPlugin({
        filename: 'reactManifest.json'
      }),
    ]
  }
}

const libConfig = (env = process.env.NODE_ENV || 'production') => {
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
      new SquashBundlePlugin({
        name: 'vendorBundle'
      }),
      new ManifestPlugin({
        filename: 'libManifest.json'
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
            squash = `${squash}\n${compilation.assets[asset].source()}`;
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