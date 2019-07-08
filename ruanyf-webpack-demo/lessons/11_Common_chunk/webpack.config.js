var webpack = require('webpack')
//插件的引入和ruanyf写的有丁点区别
var commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'init',
  filename: "init.js"
})
module.exports ={
    entry: {
        bundle1: './main1.jsx',
        bundle2: './main2.jsx'
    },
    output: {
        filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }        
      ]
    },
    plugins:[commonChunkPlugin]
}