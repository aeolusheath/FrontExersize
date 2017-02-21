var path = require('path')
var projectRoot = path.resolve(__dirname, './')
console.log(projectRoot, 'llllllllllllllllll')
module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.es6$/,
       include: projectRoot+'/',
       loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }       
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}