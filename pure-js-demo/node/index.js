// var x = require('./module.js')
// console.log(x)


var counter = require('./module.js');
var subIndex = require('./subindex')

// var counter2 = require('./module.js')

console.log(JSON.stringify(counter), 'log1')
counter.increment();
console.log('增加了counter log1')
console.log(counter.counter); // 1
console.log(counter.getCounter())
// console.log(counter.counter++)
console.log(counter.counter++)
console.log(counter.counter++)

console.log(JSON.stringify(counter), 'log1')


// console.log('---------')
// counter.incrementObjCounter()
// console.log(counter.objCounter)



subIndex.exec()