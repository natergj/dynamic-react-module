const path = require('path');
const express = require('express');
const cheerio = require('cheerio');

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  performance: {
    hints: false
  },
  externals: ['react', 'react-dom', 'react-router', 'react-router-dom', 'antd', 'moment'],
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
    rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: process.env.NODE_ENV === 'production' ? 'tsconfig.prod.json' : 'tsconfig.dev.json',
          }
        }]
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
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
    port: 8051,
    contentBase: path.join(__dirname, 'dist'),
    hot: false, // Project is not compatible with the HMR implementation of webpack dev server
    inline: false, // Don't inline the HMR code as it is not compatible
    publicPath: '/app-module-1',
    before(app) {
      // serve up sockjs code to be used by our manual HMR process
      app.use('/sockjs.min.js', express.static(path.join(__dirname, 'node_modules/sockjs-client/dist/sockjs.min.js')));
    },
    // When developing, we need to proxy the code for the app-loader so that this app module can be loaded
    // We also want to inject some javascript that will handle the update events from webpack dev server and reload
    // our current app module.
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        onProxyRes: (proxyRes, req, res) => {
          if (req.url === '/') {
            var _write = res.write;
            var output;
            var responseHTML = "";
            proxyRes.on('data', (data) => {
              data = data.toString('utf-8');
              responseHTML += data;
            });
            res.write = () => {
              // Use cheerio to inject code into specific parts of the proxied response when requesting the index.html file
              const $ = cheerio.load(responseHTML);
              $('head').append('<script src="sockjs.min.js"></script>');
              $('body').append(`
              <script>
                window.FindReact = function(dom) {
                  for (let key in dom) {
                    if (key.startsWith("__reactEventHandlers$")) {
                      const compInternals = dom[key].children;
                      const compWrapper = compInternals._owner;
                      const comp = compWrapper.stateNode;
                      return comp
                    }
                  }
                  return null;
                }
                const wrapper = FindReact(document.getElementById('hot-reload-target'));
                const sock = new SockJS('http://localhost:8051/sockjs-node');
                sock.onmessage = function(e) {
                  const msg = JSON.parse(e.data);
                  if(msg.type === 'ok') {
                    System.registry.delete('http://localhost:8051/app-module-1/index.js');
                    wrapper.loadModule('/app-module-1');
                  }
                };
              </script>
              `);

              const newResponseHTML = $.html();
              res.set({
                'content-length': newResponseHTML.length,
              });
              _write.call(res, newResponseHTML);
            }
          }
        }
      }
    }
  }
}