// bind传递参数， 顺序相关， node bind.js 运行这个javascript文件

//期待的结果是 输出
//your name is kevin
//['Kevin', 'KaiYue']
//but 将函数改为箭头函数的时候，你打印出来会有问题，不是期望值，箭头函数没有自己的上下文环境，this
//如果是箭头函数，在浏览器中执行会提示arguments is not undefined, 但是node环境下会打印出奇怪的参数，待查看。
const output = function(name){
  console.log(`your name is ${name}`)
  // console.log(Array.prototype.splice.call(arguments) + ' current params')
  var args = Array.prototype.slice.call(arguments); 
  console.log(args)
}

//这个Kevin 会打印出来 这个默认参数设定成功了
const copyFunc = output.bind(null, 'Kevin')

copyFunc('KaiYue')

console.log(arguments)


