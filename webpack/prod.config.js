const path = require('path');

const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.min.js',
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
});
