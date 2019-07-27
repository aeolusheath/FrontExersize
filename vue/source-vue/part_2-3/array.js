const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto) // 这个对象的原型是数组的原型对象，他有数组的所有方法


// 7个 可以改变数组本身的方法
[ 'push', 'pop','shift', 'unshift', 'splice', 'sort', 'reverse' ].forEach(function(method) {
    // 这里的方法是原型对象上面的方法，并不是arrayMethods对象自己的方法
    const original = arrayMethods[method]
    Object.defineProperty(arrayMethods, method, {
      value: function mutator(...args) {
        let result = original.apply(this, args)
        const ob = this.__ob__ // observer对象
        let inserted
        switch (method) {
          case 'push':
          case 'unshift':
            inserted = args
            break
          case 'splice': // 第一个参数和第二个参数是必填，第三个参数是插入的值，可以为undefined
            inserted = args.slice(2)
        }
        // args 是数组
        if (inserted) ob.observeArray(inserted)
        ob.dep.notify()
        return result
      },
      enumerable: false,
      writable: true,
      configurable: true
    })
})

// 1,  基于数组的原型，实例化一个对象。 这个对象的原型是数组的原型(对象)。
// 2,  给这个对象实例本身定义一些方法，这些方法 底层调用的 原型上的方法，但是我们定义的时候，增加一些自己的逻辑。
