const merge = require('webpack-merge');

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'inline-source-map',
  output: { publicPath: '/' },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
});
