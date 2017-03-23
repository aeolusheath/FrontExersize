//http://stackoverflow.com/questions/29558938/add-a-sleep-method-in-a-object-method-chainjs
var Person = function(name) {
  this.name = name;
  console.log('hello '+ name)
}
Person.prototype.eat = function(meal) {
  console.log('eat '+ meal)
}
Person.prototype.sleep = function*(time) {
  setTimeout(()=>{
    console.log('午时已到')
    this.next()
  }, time * 1000)
  console.log('sleep function')
}

var Kevin = new Person('Kevin')
Kevin.sleep(10)
// console.log(Kevin.eat)
