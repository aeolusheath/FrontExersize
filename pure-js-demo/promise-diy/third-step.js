function Promise4(executor) {
  this.status = 'pending'
  this.error = void 0
  this.value = void 0
  this.fulFillTasks = []
  this.rejectTasks = []

  const resolve1 = (resolveValue) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.value = resolveValue // then 方法接收状态的回调函数的参数值
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
        fn & fn(rejectError)
      })
    }
  }

  executor(resolve1, reject1)
}

Promise4.prototype.then = function (onFulfilled, onRejected) {

  // 有两种情况会执行下面的代码 A 和 B
  // 1，构造函数里面传入的resolve 和 reject是同步代码块
  // 2，promise已经是接收状态或者拒绝状态

  // A 执行接收状态的回调函数
  if (this.status === 'resolved') {
    // const fulfillRet = onFulfilled(this.value)
    // onFulfilled可能是在异步resolve后执行，在任务队列里面执行
    // 所以我们这里将这个返回值定义到实例属性上
    setTimeout(() => {
          console.log('this对象是啥，resolve 1', this)
          this.fulfillRet = onFulfilled(this.value)
    }, 0)
    return new Promise4((resolve, reject) => {
      setTimeout(() => {
        console.log("resolve 2")
        resolve(this.fulfillRet)
      }, 0)
    })
  }
  // B 执行拒绝状态的回调函数
  if (this.status === 'rejected') {
    // const rejectRet = onRejected(this.error)
    setTimeout(() => {
      console.log('this对象是啥，reject 2', this)
      this.rejectRet = onFulfilled(this.value)
    }, 0)
    return new Promise4((resolve, reject) => {
      setTimeout(() => {
        console.log("reject 2")
        reject(this.rejectRet)
      }, 0)
    })
  }

  // 构造函数里面传入的resolve 和 reject是在异步代码块里面执行
  // 错误
  // this.fulFillTasks.push(onFulfilled)
  // this.rejectTasks.push(onRejected)



  // 遇到了一些困难，这里因为是异步的，返回的Promise一开始的状态值肯定是pending
  // 但是如何获取到异步的 onFulfilled的返回值，并且在resolve之后 将这个返回值
  // 传递给返回的这个promise
  // 正确
  return new Promise4((resolve, reject) => {
      // 非常关键，将回调函数和返回的promise的resove函数封装到一个函数里面
      // 然后放到调用then方法的promise的任务队列里面
      // 这样调用then方法的promise 状态从 pending 变为 resolved的时候
      // then方法返回的promise，的状态才会从 pending 变为 resolved
      // this.fulFillTasks.push((val) => {
      //   let ret = onFulfilled(val)
      //   resolve(ret)
      // })
      // this.rejectTasks.push((err) => {
      //   let errRet = onRejected(err)
      //   // 这里也是resolve
      //   resolve(errRet)
      // })
    var resolveFunc = (val) => {
      return setTimeout(() => {
        let ret = onFulfilled(val)
        resolve(ret)
      }, 0)
    }
    this.fulFillTasks.push(resolveFunc)

    // 函数式编程
    var rejectFunc = (err) => {
      return setTimeout(() => {
        let errRet = onRejected(err)
        resolve(errRet)
      }, 0)
    }
    this.rejectTasks.push(rejectFunc)
  })
}