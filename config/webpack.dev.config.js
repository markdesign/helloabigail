const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const devConfiguration = {
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
};

module.exports = merge(baseConfig, devConfiguration);
