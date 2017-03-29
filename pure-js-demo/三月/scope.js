//这里定义的i实际上是全局作用域里面的i
for(var i =0; i<4 ;i ++) {
  setTimeout(()=>{
    console.log(i)
  }, 1000)
}
console.log('global.i的值', i)
i = 1000

console.log('当前i的值', i)