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
//   // arr.splice(to, 0, arr.splice(from, 1)[0])
//   // console.log(arr)
//   // arr[from] = arr.splice(to, 1, arr[from])[0]
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


// // let from = Number(el.getAttribute('index'))-1,
// // index = Number(sibling.getAttribute('index'))-1
// // // console.log(from, index, '拖拽结束了---->>>>>>')
// // this.services.splice(index, 0, this.services.splice(from, 1)[0])

function *gen (a) {
  var x = yield a + 1,
    y = yield x * 2,
    [z1, z2] = [yield 3, yield 4]
  var z = z1 + z2
  return z 
}


function exceuteGen(generatorFunc) {
  let g = generatorFunc
  let value
  while(true) {
    var temp = g.next(value)
    if (!temp.done)  {
      value = temp.value
    } else {
      return value
      break
    }
  }
}

var g = gen(3)
console.log('最后的结果是 ' + exceuteGen(g))

function * gen () {
  console.log('started')
  console.log(yield 1)
  yield 2
  yield 3
}

function* parallelTask () {
  let [students, books] = yield [
    getStudents(),
    getBooks()
  ]
  console.log(students, books)
}

