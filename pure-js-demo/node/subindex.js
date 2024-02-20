
var counter = require('./module.js');

// var counter2 = require('./module.js')

module.exports = {
    exec: function() {
        console.log('-----------------------------22222-----------------------------')
        console.log(JSON.stringify(counter), 'log2')
        // counter.increment();
        // console.log('增加了counter log2')
        // console.log(counter.counter); // 1
        // console.log(counter.getCounter())
        // console.log(JSON.stringify(counter), 'log2')

        // console.log('---------')
        // counter.incrementObjCounter()
        // console.log(counter.objCounter)
    }
}