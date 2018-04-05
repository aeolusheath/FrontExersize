// function* g() {
//   yield 1
//   let x = yield 2
//   console.log(x)
//   return undefined //默认省略
// }

// var gen = g()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next(5))
// console.log('--------------->>>')
// console.log(gen.next())

// function exchange(arr, from, to) {
//   arr.splice(from, 1, arr.splice(to, 1, arr[from])[0])
//   console.log(arr)
//   return arr
// }

// var arr = [0,1,2,3,4,5]
// exchange(arr, 0, 4)


//读取文件的三种办法

//第一种传统的回调
var fs = require('fs')

function readFileCallback(callback) {
  fs.readFile('./work/test-input.txt', (content)=>{
    callback(content)
  })
}


//第二种用promise
function readFilePromise() {
  return new Promise((resolve, reject)=> {
    fs.readFile('./work/test-input.txt', (err, content)=>{
      if(err)
        reject(err)
      else
        resolve(content)
    })
  })
}

//第三种用generator

function* readFileGenerator () {

}

//---------------------------------------------------

function * dataConsumer() {
  console.log('started')
  console.log(`1.${yield}`)
  console.log(`2.${yield}`)  
  return 'result'
}

let genObj = dataConsumer()
console.log(genObj.next())

