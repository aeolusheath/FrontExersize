module.exports = {
  entry: ['./main.es6', './main2.js', './global'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    // loaders: [
    //   {
    //     test: /\.jsx?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel',
    //     query: {
    //       presets: ['es2015', 'react']
    //     }
    //   }
    // ]    
    // loaders:[
    //   {
    //     test: /\.js[x]?$/,
    //     exclude: /node_modules/,
    //     loader: 'babel-loader?presets[]=es2015&presets[]=react'
    //   }
    // ]
  },
  extensions: ['', '.js', '.es6']
};