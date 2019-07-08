function Promise2(executor) {
  this.status = "pending" // resolved rejected pending

  // 这里的 executor 里面的两个参数只是外界的构造函数的参数的函数的形式参数
  // 比如我们这样写 new Promise((resolve, reject) => { console.log('111') })
  // 下面的resolve实际上是在promise内部实现的，我们在这里完全可以改为resolve1 reject1
  // 这样命名是为了将形式参数，与实际函数内部的实现分开，其实你完全可以写成一样的
  executor(resolve1, reject1)

  // resolve之后，状态应该用 pending 到 resolved
  function resolve1() {
    if (this.status === 'pending') {
      this.status = 'resolved'
    }
  }
  function reject1() {
    if (this.status === 'pending') {
      this.status = 'rejected'
    }
  }
}

// 到这一步我们已经有一个最基础的形式了

var myPromise = new Promise2((resolve, reject) => {
  resolve()
})

// console.log(myPromise, myPromise.status, "abcdefg")





// 查看结果，看到status错误，this 没有对，this指向的是window


// -----分割线------- 我们来改修改上面的bug-----

function Promise22(executor) {
  this.status = 'pending'
  var resolve1 = () => {
    if (this.status === 'pending') {
      this.status = 'resolved'
    }
  }
  var reject1 = () => {
    if (this.status === 'pending') {
      this.status = 'rejected'
    }
  }
  executor(resolve1, reject1) // 形式参数
}


var myPromise = new Promise22((resolve, reject) => {
  resolve()
})
// console.log(myPromise, "mypromise")




// 最简单的一版已经完成，但是我们resolve一般是要传递一个结果给then的回调的
// 所以我们下一步要给resolve1 传递一个参数
// 而且我们要将这个参数存储在实例属性上，为什么？因为我们.then的时候要获取到这个值
// 我们同样要将错误信息给存上，因为在then的第二个参数里面需要获取到

function Promise222(executor) {
  this.status = 'pending'
  this.error = null
  this.value = null
  var resolve1 = (resolveValue) => {
    this.value = resolveValue
    if (this.status === 'pending') {
      this.status = 'resolved'
    }
  }
  var reject1 = (rejectError) => {
    this.error = rejectError
    if (this.status === 'pending') {
      this.status = 'rejected'
    }
  }
  executor(resolve1, reject1) // 形式参数
}

Promise222.prototype.then = function (onFulfilled, onRejected) {
  // 先管onFulfilled
  var value = this.value
  var err = this.error
  // 不能直接调用
  // onFulfilled(value)

  // 比如要判断状态是resolved才能取调用onFulfilled
  // 如果状态是rejected 就要调用onRejected函数了
  if (this.status === 'resolved') {
    onFulfilled(value)
  }

  if (this.status === 'rejected') {
    onRejected(err)
  }
}

// 测试一下
// var myPromise = new Promise222((resolve, reject) => {
//   // resolve('value--')
//   reject(new Error('reject error from promise constructor'))
// }).then((v) => {
//   console.log(v, "second then")
// }, (err) => {
//   console.error(err)
// })





// 但是如果我们在Promise222构造函数里面不直接resolve，而是调用异步的
// resolve, 这样就会存在问题，then的方法是同步的，因为执行到then的时候
// status 并没有从 pending 到 resolved ，所以 second then 永远不会执行
// 所以我们需要改进我们的整个函数
// var myPromise = new Promise222((resolve, reject) => {
//   // resolve('value--')
//   // reject(new Error('reject error from promise constructor'))
//   setTimeout(() => {
//     resolve('async value---')
//   }, 0)
// }).then((v) => {
//   console.log(v, "second then")
// }, (err) => {
//   console.error(err)
// })




// 再改一版
function Promise2222(executor) {
  // 异步队列？
  // 比如在构造函数里面是一个setTimeout，resolve是在下一个事件循环队列再去执行的
  // 这种先后顺序的问题，一般都是放进一个任务队列，前一个执行了 再去触发后一个，参考lazyman
  this.fulFillTasks = []
  this.rejectTasks = []
  this.status = "pending"
  let value = null
  let error = null
  var resolve1 = (resolveValue) => {
    if (this.status === "pending") {
      this.status = "resolved"
      this.value = resolveValue // 放if里面还不知道具体有什么问题
      const fn = this.fulFillTasks.pop()
      fn && fn(this.value)
    }
  }

  var reject1 = (rejectError) => {
    if (this.status === "pending") {
      this.status = "rejected"
      this.error = rejectError // 放if里面还不知道具体有什么问题
      const rejectFn = this.rejectTasks.pop()
      rejectFn && rejectFn(rejectError)
    }
  }
  executor(resolve1, reject1)
}

Promise2222.prototype.then = function (onFulfilled, onRejected) {
  const value = this.value
  const error = this.error
  //todo 判断 onFulfilled 和 onRejected 是函数
  this.fulFillTasks.push(onFulfilled)
  this.rejectTasks.push(onRejected)
  if (this.status === 'resolved') {
    onFulfilled(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.error)
  }
}



// 到此为止，其实我们已经完成了异步调用，还差一个链式调用
// 这一部分注释的代码是可以完成的
// var myPromise = new Promise2222((resolve, reject) => {
//   // resolve('value--')
//   // reject(new Error('reject error from promise constructor'))
//   console.log('main stack')
//   setTimeout(() => {
//     resolve('async resolveValue')
//   }, 2000)
// }).then((v) => {
//   console.log(v, "resolveValue in then")
// }, (err) => {
//     console.log("ddd")
//   console.error(err)
// })


// 但是发现了不能分开调用，链式调用往后稍稍
// 我们在then里面加一个判断，如果状态是已经resolved or rejected 直接调用函数
// if (this.status === 'resolved'){} 这两块代码
// var p = new Promise2222((resolve, reject) => {
//   // resolve('then invoke twice')
//   setTimeout(() => {
//     resolve('multiple then')
//   }, 1000)
// })

// p.then((v) => {
//   console.log('1111', v)
// })
// // 到此为止，我们又进了一步，但是你会发现，我们分开多次调用会有问题。
// p.then(v => {
//   console.log('2222', v)
// })





// 因此我们还需要改代码，其实这一步很简单，就是resolve函数里面，不应该只是执行pop的第一个函数
// 而且promise A+ 规范说了，then里面的 onFulfilled 函数 和 onRejected函数只能执行一次

function Promise5(executor) {
  this.status = 'pending'
  this.value = void(0)
  this.error = void(0)
  this.fulFillTasks = []
  this.rejectTasks = []
  const resolve1 = (resolveValue) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.value = resolveValue
      this.fulFillTasks.forEach(fn => {
        fn && fn(resolveValue)
      })
    }
  }
  const reject1 = (rejectError) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.error = rejectError
      this.rejectTasks.forEach(fn => {
        fn && fn(rejectError)
      })
    }
  }
  executor(resolve1, reject1)
}


// 而且promise A+ 规范说了，then里面的 onFulfilled 函数 和 onRejected函数只能执行一次
Promise5.prototype.then = function (onFulfilled, onRejected) {
  // 同步resolve reject
  if (this.status === 'resolved') {
    onFulfilled(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.error)
  }
  // 异步resolve reject
  this.fulFillTasks.push(onFulfilled)
  this.rejectTasks.push(onRejected)
}


// 测试成功，这一步我们测试成功了
var p = new Promise5((resolve, reject) => {
  resolve('then invoke twice')
  // setTimeout(() => {
  //   resolve('multiple then')
  // }, 1000)
})
p.then((v) => {
  console.log('then one', v)
})
p.then(v => {
  console.log('then two', v)
})




// 我们来写链式调用，then 方法直接返回this 对象吗？
// promise A + 规范说了 pending -> resolved or pending -> rejected 状态不能反复
// 而且到这里我们已经到了promise A+ 的 - 2.2.7
// then 返回一个promise，并且这个promise接收onFullfilled 和 onRejected的返回值
// 所以我们要在Promise里面，设置一个值去存储返回值？

function Promise6(executor) {
  this.status = 'pending' //'resolved' 'rejected'
  this.value = void (0)
  this.error = void (0)
  this.fulFillTasks = []
  this.rejectTasks = []

  this.fulfillRet = void (0)
  this.rejectRet = void(0)

  const resolve1 = (resolveValue) => {
    this.value = resolveValue
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.fulFillTasks.forEach(fn => {
        this.fulfillRet = fn && fn(resolveValue)
      })
    }
  }

  const reject1 = (rejectError) => {
    this.error = rejectError
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.rejectTasks.forEach(fn => {
        this.rejectRet = fn && fn(rejectError)
      })
    }
  }

  executor(resolve1, reject1)
 // 略
}

Promise6.prototype.then = function (onFulfilled, onRejected) {
  // 同步resolve reject
  if (this.status === 'resolved') {
    // 这是同步的
    this.fulfillRet = onFulfilled(this.value)

    // 如果是同步resolved，那么返回的promise必须也是同步的，也就是说也是resolved
    return new Promise6((resolve, reject) => {
      resolve(this.fulfillRet)
    })
  }
  if (this.status === 'rejected') {
    // 这是同步的
    this.rejectRet = onRejected(this.error)
    return new Promise6((resolve, reject) => {
      reject(this.rejectRet)
    })
  }
  // 异步resolve reject
  this.fulFillTasks.push(onFulfilled)
  this.rejectTasks.push(onRejected)

  // 必须return一个新的promise
  const currentStatus = this.status
  var newP = new Promise6((resolve, reject) => {
        // 这里是异步的，状态肯定是pending
        // 但是如何保证，上面的onFulled 或者 onReject执行之后 在这里执行resolve函数
        // 要把resolve 放到异步队列里面吗？
        // newP.fulFillTasks.push(resolve.call(null))

        // 比如保证 return的promise 执行完成之后，才能变成 resolve状态

  })

  return newP
  // return new Promise6()
}

// 普通的promise 这样写
// const o = new Promise((resolve2, reject) => {
//   resolve2("resolve")
// }).then((res) => {
//   console.log(res, "resss-----")
// })

p.then(() => {
  return new Promise(resolve => {
    setTimeout(resolve, 10000)
  })
})