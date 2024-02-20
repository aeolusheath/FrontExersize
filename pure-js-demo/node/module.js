// module.exports = {
//     name: 'kevin'
// }

// module.exports = 'Kev'

var counter = 1;
var objCounter = { c: 1 }

function increment() {
    // this.counter++
    counter++;
}

function decrement() {
    counter--;
}

function getCounter() {
    return counter
}

function incrementObjCounter() {
    objCounter.c++
}

module.exports = {
  counter: counter,
  objCounter: objCounter,
  incrementObjCounter: incrementObjCounter,
  increment: increment,
  decrement: decrement,
  getCounter: getCounter
};