const reverString = function(str) {
  var arr =str.split('')
  //reverse 会改变原来的数组
  arr.reverse()
  return arr.join('')
}
console.log(reverString('kevin'))