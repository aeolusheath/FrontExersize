import Dep from "./Dep";

// version 1
function defineReactive(data, key, val) {
    Object.defineProperty(data, key, {
        enumerable: true, 
        configurable: true,
        get: function() {
            return val
        },
        set: function() {
            if(val === newVal) {
                return
            }
            val = newVal
        } 
    })
}

// version 2
function defineReactive(data, val, key) {
    // 发布订阅模式
    var dep = [] // add
    Object.defineProperty(data, key, {
        enumerable: true, 
        configurable: true,
        get: function() {
            // get get获取依赖
            dep.push(window.target) // add
            return val
        },
        set: function() {
            if(val === newVal) {
                return
            }
            // setter中触发依赖
            for (let i = 0; i < dep.length; i++) { // add
                dep[i](newVal, val)
            }
            val = newVal
        } 
    })
}


import Dep from './Dep'

// version 3
function defineReactive (data, val, key) {
    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumberable: true,
        configurable: true,
        get: function() {
            dep.depend() // dep.addSub(window.target)
            return val
        },
        set: function(newVal) {
            if (val === newVal) {
                return 
            }
            val = newVal
            dep.notify()
        }
    })
}



// version 4  -------------------------分割线--------------------------
import { arrayMethods } from './array'

// 检查__proto__是否可用
const hasProto = '__proto__' in {}
// 获取arrayMethods对象本身的方法【控制层】
const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

export class Observer {
    constructor(value) {
        this.value = value
        this.dep = new Dep() // 新增
        def(value, '__ob__', this)
        if(Array.isArray(value)){
            // 将数组的原型对象修改为我们的中间层对象
            // value.__proto__ = arrayMethods
            // 并不是所有浏览器都支持.proto， vue是直接将改变数组的几个方法设置到被侦测的数组上
            // 也就是说，比如我们监测到数组tempArr，temp.Arr.__proto__不支持，直接给tempArr设置push方法为 arrayMethods的push方法。


            const augment = hasProto ? protoAugment : copyAugment
            augment(value, arrayMethods, arrayKeys)
            // 检查数组元素的值变化，比如arr[0] 从 1 变为 2
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    // 监听Object的每一个属性
    walk(obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }
    // 监听Array中的每一项
    observeArray(items) {
      for (let i = 0, l = items.length; i < l; i++) {
        observe(items[i])
      }
    }
}

// 
function defineReactive(data, key, val) {
    // if (typeof val === 'object') {
    //     new Observer(val)
    // }
    let childOb = observe(val) // 取代上面的，递归处理响应

    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumberable: true,
        configurable: true,
        get: function() {
            dep.depend() // dep.addSub(window.target)

            if (childOb) {
              childOb.dep.depend()
            }
            return val
        },
        set: function(newVal) {
            if (val === newVal) {
                return 
            }
            val = newVal
            dep.notify()
        }
    })
}

function protoAugment(target, src, keys) {
  target.__proto__ = src
}

function copyAugment(target, src, keys) {
  //将arrayMethods的实例本身的方法赋值给监听的数组
  for (let i = 0, l = keys.length; i < l; i++ ) {
    const key = keys[i]
    def(target, key, src[key])
    // target[key] = src[key]
  }

}

function def(obj, key, val, enumberable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumberable,
    writable: true,
    configurable: true
  })
}

export function observe (value, asRootData) {
  if (!isObject(value)) {
    return 
  }
  let ob 
  // if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
  if (Object.hasOwnProperty(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}