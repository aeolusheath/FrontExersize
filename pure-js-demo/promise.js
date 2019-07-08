//code from firefox
console.log('----------------promise Catch 链式调用----------------------------')
var p1 = new Promise(function(resolve, reject) {
  resolve('Success');
});

p1.then(function(value) {
  console.log(value); // "Success!"
  throw 'oh, no!';
}).catch(function(e) {
  console.log(e); // "oh, no!"
}).then(function(){
  console.log('after a catch the chain is restored');
}, function () {
  console.log('Not fired due to the catch');
});


console.log('\n')
console.log('----------------promise then静态方法---------------------------- ')

Promise.resolve("foo")
  // 1. Receive "foo" concatinate "bar" to it and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before return the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before string is actually processed by the mocked asynchronous code in the
  // prior then block.  
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This 
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string);
});


console.log('\n')
console.log('----------------promise Resolve静态方法----------------------------')
// var original = Promise.resolve(true);
var original = new Promise(function(resolve, reject){
    throw new Error(' original throw error')
})

var cast = Promise.resolve(new Error('resolve error in paramter'));
cast.then(function(v) {
    console.log(v, 'resolve'); // true
}).catch(function(err){
    console.log(err, 'Resolve err')
});


console.log('\n')
console.log('----------------promise Resolve静态方法----------------------------')
var  p = new Promise(function(resolve, reject){
  reject('Testing static reject')
})
Promise.reject("Testing static reject")


console.log('\n')
console.log('----------------promise 初始化----------------------------')
var  p = new Promise(function(resolve, reject){
  console.log('kevinpppppppppppppppp init this promise !')
})

