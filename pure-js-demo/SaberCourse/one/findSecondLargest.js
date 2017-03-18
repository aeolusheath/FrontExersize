// method 1
//这个方法循环了arr.length次
const arr =  process.argv[2]
if(!arr) return console.error('参数')
// console.log(typeof(JSON.parse(arr)))
// console.log(JSON.parse(arr), '转换之后的')
const func = function(arr) {
  var max_num = -Infinity
  var secend_largest = -Infinity
  for (var num of arr) {
    num = +num
    if(num > max_num){
      secend_largest = max_num //这一句很关键
      max_num = num
    }
    else if(num<=max_num && num>= secend_largest) {
      secend_largest =  num
    }
  }
  console.log('second_largest_number', secend_largest)
}
func(JSON.parse(arr))

//method 2
// 对数组进行排序， 找到第二个或者倒数第二个