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



// version 4 

export class Observer {
    constructor(value) {
        this.value = value
        if(!Array.isArray(value)){
            this.walk(value)
        }
    }

    walk(obj) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }
}

function defineReactive(data, key, val) {
    if (typeof val === 'object') {
        new Observer(val)
    }
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