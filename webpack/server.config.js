const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    mode: process.env.NODE_ENV,
    entry: './app/index',
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      filename: 'bundle.min.js',
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
      }, {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
        }],
      }],
    },
    plugins: [
      new webpack.EnvironmentPlugin([
        'NODE_ENV',
      ]),
    ],
    resolve: {
      modules: ['app', 'node_modules'],
    },
  },
  {
    mode: process.env.NODE_ENV,
    target: 'node',
    entry: './server-renderer.js',
    externals: [nodeExternals()],
    output: {
      filename: 'server-renderer.min.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
      }, {
        test: /\.less$/,
        use: [{
          loader: 'null-loader',
        }],
      }],
    },
    resolve: {
      modules: ['app', 'node_modules'],
    },
  },
];
