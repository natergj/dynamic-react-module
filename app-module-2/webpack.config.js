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
  externals: ['react', 'react-dom', 'moment'],
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
            loader: 'babel-loader',
            options: {
              plugins: [
                ["import", {
                  libraryName: 'antd'
                }]
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: process.env.NODE_ENV === 'production' ? 'tsconfig.prod.json' : 'tsconfig.dev.json',
            }
          }
        ]
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              camelCase: 'dashes'
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
    ],
  },
  devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',
  devServer: {
    port: 8052,
    contentBase: path.join(__dirname, 'dist'),
    hot: false,
    inline: false,
    publicPath: '/app-module-2',
    before(app) {
      app.use('/sockjs.min.js', express.static(path.join(__dirname, 'node_modules/sockjs-client/dist/sockjs.min.js')));
    },
    proxy: {
      '/': {
        target: 'http://localhost:8050',
        onProxyRes: (proxyRes, req, res) => {
          if (req.url === '/') {
            const _write = res.write;
            let responseHTML = "";
            proxyRes.on('data', (data) => {
              data = data.toString('utf-8');
              responseHTML += data;
            });
            res.write = () => {
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
                const sock = new SockJS('http://localhost:8052/sockjs-node');
                sock.onmessage = function(e) {
                  const msg = JSON.parse(e.data);
                  if(msg.type === 'ok') {
                    System.registry.delete('http://localhost:8052/app-module-2/index.js');
                    wrapper.loadModule('/app-module-2');
                  }
                };
              </script>
              `);

              const newResponseHTML = $.html();
              res.setHeader('content-length', newResponseHTML.length);
              _write.call(res, newResponseHTML);
            }
          }
        }
      }
    }
  }
}