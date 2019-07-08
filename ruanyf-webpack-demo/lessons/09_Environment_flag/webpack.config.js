var webpack = require('webpack');
var configObj = require('./config.js')
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
  KEVIN: configObj,
  isDev: process.env
});
console.log(process.env, '99999999')
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin]
};