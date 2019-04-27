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
  // 错误0.5
  // 这里的问题，不能控制获取到onFulfilled的value
  // 不能将value传递给返回的promise的resolve()函数





  // 如果是异步的，我们要解决的问题，如果是异步的话，返回的一定是一个promise
  // 1，获取到 onFullFilled的 返回值
  // 2，？？？？卡壳了 明天再写
  // this.fulFillTasks.push(onFulfilled)
  // this.rejectTasks.push(onRejected)

  // 必须return一个新的promise
  // const currentStatus = this.status

  // 我们先处理then第一个函数，也就是resolve的情况。
  // 而且 onFullFilled函数 会立即同步返回一个值，可能是undefined 可能是一个promise
  // 而且这个值我们需要传递给返回的


  // 有问题，这里 ----->  这里不能立即执行，必须要变为resolved才能执行
  // 错误步骤 1 error:  this.fulfillRet = onFulfilled(this.value)
  // 仍然要放到队列里面去

  var newP = new Promise6((resolve, reject) => {
        // 这里是异步的，状态肯定是pending
        // 但是如何保证，上面的onFulled 或者 onReject执行之后 在这里执行resolve函数
        // 要把resolve 放到异步队列里面吗？

        // 这是我遇到的问题，没有想到将这两个放进一个函数，放进同一个函数并不会执行，然后放进调用then的异步队列里面
        // 这样既能保证p1.then()，p1的状态变为resolved,then返回的才变为resolved
        /**
         * let func = (value) => {
         *  let ret = onFulfilled(value)
         *  resolve(ret)
         * }
         */



        // 错误步骤 2 error: newP.fulFillTasks.push(resolve.call(null, this.onFulfilled(this.value))) // 错在那里，this.onFullfilled仍然没有等待 status 变为resolved的时候去执行
        // 比如保证 return的promise 执行完成之后，才能变成 resolve状态

        /**
         *
          所以最终是这样：
          错误步骤 3 error:
          newP.fulFillTasks.push((resolveValue) => {
            let x = fullFilled(value)
            resolve(x)
          })
         *
         *
         */
        /**
         * 错误步骤 4 error:
         * 这里不应该将函数放到返回的promise的fulFillTasks里面应该放到 当前then的promise的fulFilledTasks里面
         */
        this.fulFillTasks.push((value) => {
          let retValue = onFulfilled(value)
          resolve(retValue)
        })
        this.rejectTasks.push((err) => {
          let retErr = onRejected(err)
          reject(retErr)
        })

  })

  return newP
  // return new Promise6()
}

// 到这一步，我们解决了一个问题：then()方法的确返回了一个promise
// 返回的这个promise:
//     1，如果调用then的promise是一个同步的，那么返回的这个promise状态一定会立即变成 resolved 或者 rejected。

//     卡壳卡到这一步很多天
//     2，如果调用then的promise是一个异步，那么返回的这个promise状态一定先是pending，
//        然后等待调用then的promise resolve / reject之后 再变成resolved 或者 rejected

// 没有考虑到的是then()方法，onFulfilled函数 和 onRejected函数返回的是一个promise，这时候就不能直接resolve(a promise object)


// 测试代码：

// TEST CASE 1
var p1 = new Promise6((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve-value')
  }, 3000)
})
// console.log(p1, "p1 当前的状态")
// setTimeout(() => {
//   console.log(p1, "p1 3秒之后的状态")
// }, 3000)


// TEST CASE 2
var p2 = new Promise6((resolve, reject) => {
  resolve("resolve-sync")
})
var retP2 = p2.then((resolveVal) => {
  // return(resolveVal + "-then")
  // or do nothing
})
// error
// console.log(retP2, "retP2返回的一定是立即resolved的promise")


// TEST CASE 3
var p3 = new Promise6((resolve, reject) => {
  reject(new Error("reject-sync-error"))
})
console.log(p3)
var retP3 = p3.then(() => { }, (rejectVal) => {
  console.log(rejectVal.toString(), "rejectVal is")
  return rejectVal
})
// 到这里我以为自己对了，但是是错了，用真正的promise里面会发现，首先是pending，然后才是resolved
// 因为是微任务队列里面，先执行下面的retP3
// 所以我们的是是错的，但是总体思路是对的变成异步即可
console.log(retP3, "retP3返回的一定是立即rejected的promise")

// setTimeout(() => {
//   console.log(retP3, "dddd")
// })