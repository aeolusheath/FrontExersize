var globals = {}

function makeBindFun(resolver) {
  return function(k, v) {
    var stack = globals[k] || []
    globals[k] = resolver(stack, v)
    return globals
  }
}

var stackBinder = makeBindFun(function(stack, v){
  stack.push(v)
  return stack
})