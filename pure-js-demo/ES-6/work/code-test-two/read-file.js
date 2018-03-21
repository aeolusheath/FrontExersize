var fs = require('fs')

function readFile(filePath, callback){
  fs.readFile(filePath, 'utf8', (err, content)=>{
    if(err) return console.error('读取文件出错')
    callback(content)
  })
}
// promise

module.exports = readFile