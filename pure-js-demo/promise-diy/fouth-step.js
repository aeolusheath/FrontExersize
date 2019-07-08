function Promise5(executor) {
  this.status = 'pending'
  this.value = void 0
  this.error = void 0
  this.fulFillTasks = []
  this.rejectTasks = []


  const _resolve = (resolveValue) => {
    if (this.status === 'pending') {
      this.status = 'resolved'
      this.value = resolveValue
      this.fulFillTasks.forEach(fn => {
        fn && fn(resolveValue)
      })
    }
  }

  const _reject = (rejectError) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.error = rejectError
      this.rejectTasks.forEach(fn => {
        fn && fn(rejectError)
      })
    }
  }
  executor(_resolve, _reject)
}

// Promise5.prototype.then = function (onFulfilled, onRejected) {
//   if (this.status === 'resolved') {
//     return new Promise5((resolve, reject) => {
//       setTimeout(() => {
//         let val = onFulfilled(this.value)
//         resolve(val)
//       }, 0)
//     })
//   }

//   if (this.status === 'rejected') {
//     return new Promise5((resolve, reject) => {
//       let error = onRejected(this.error)
//       reject(error)
//     }, 0)
//   }

//   return new Promise5((resolve, reject) => {
//     var resolveFunc = (val) => {
//       return setTimeout(() => {
//         let ret = onFulfilled(val)
//         resolve(ret)
//       }, 0)
//     }
//     this.fulFillTasks.push(resolveFunc)

//     var rejectFunc = (val) => {
//       return setTimeout(() => {
//         let errRet = onRejected(err)
//         resolve(errRet)
//       }, 0)
//     }
//     this.rejectTasks.push(rejectFunc)
//   })
// }


Promise5.prototype.then = function (onFulfilled, onRejected) {
  // 可能不是传入的函数，需要处理
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected = typeof onRejected === "function" ? onRejected : reason =>{ throw reason };

  // onFulfilled 和 onRejected返回的可能是Promise
  // ret 是返回值
  function resolvePromise(ret, resolve, reject) {
    // todo 判断resolve 和 reject是否是函数
    // 判断ret是不是promise
    if (ret !== null && (typeof p === 'object')) {
      try {
        let then = ret.then
        if (typeof then === 'function') {
          then.call(ret, x => {
              resolvePromise(x, resolve, reject)
          }, y => {
              reject(y)
          })
        } else {
         resolve(ret)
        }
      } catch (err) {
        reject(err)
      }

    // 不是promise直接resolve onFulfilled的返回值
    } else {
      resolve(ret)
    }

  }


  if (this.status === 'resolved') {
    return new Promise5((resolve, reject) => {
      setTimeout(() => {
        try {
          let ret = onFulfilled(this.value)
          // resolve(val)
          resolvePromise(ret, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    })
  }

  if (this.status === 'rejected') {
    return new Promise5((resolve, reject) => {
      try {
        let errRet = onRejected(this.error)
        // reject(error)
        resolvePromise(errRet, resolve, reject)
      } catch (e) {
        reject(e)
      }
    }, 0)
  }

  return new Promise5((resolve, reject) => {
    var resolveFunc = (val) => {
      return setTimeout(() => {
        try {
          let ret = onFulfilled(val)
          // resolve(ret)
          resolvePromise(ret, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    this.fulFillTasks.push(resolveFunc)

    var rejectFunc = (val) => {
      return setTimeout(() => {
        try {
          let errRet = onRejected(err)
          // resolve(errRet)
          resolvePromise(errRet, resolve, reject)
        } catch (e) {
          reject(e)
        }
      }, 0)
    }
    this.rejectTasks.push(rejectFunc)
  })
}