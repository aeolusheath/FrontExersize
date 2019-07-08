//题目： 构造person对象，要求有 sleep 方法 和 eat 方法
//要求实现 new Person('Kevin').sleep(10).eat('dinner')
//依次输出
//hello Kevin
//等待10s
//sleep 10s
//eat dinner


/** 但是这个链式调用 没有特别好的方法[自己掌握的知识不够] */
var Person = function (name) {
  this.name = name;
  console.log(`hello ${name}`)
}
// Person.prototype.sleepOk = false
Person.prototype.sleep = function (time, func, params) {
  setTimeout(()=>{
      console.log('10s')
      func(params)
  }, time * 1000)
  return this
}

Person.prototype.eat = function(meal){
  console.log('eat '+ meal)
  
}

var kevin = new Person('kevin')

kevin.sleep(5, kevin.eat, 'dinner')