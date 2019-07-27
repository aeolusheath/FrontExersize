export default class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm
        // 执行this.getter()， 就可以读取data.a.b.c的内容
        this.getter = parsePath(expOrFn) // 返回一个函数，这个函数传入obj对象，返回obj对象.expOrFns 比如 exp是 a.b.c 那么 获取的是obj.a.b.c
        this.cb = cb
        this.value = this.getter()
    }
    get () {
        window.target = this // 赋值给
        let value = this.getter.call(this.vm, this.vm)
        window.target = undefined
        return value
    }
    update () {
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }
}

const bailRE = /[^\w.$]/
export function parsePath (path) {
    if(bailRE.test(path)) {
        return
    }
    const segments = path.split('.')
    return function(obj) {
        for (let i = 0; i < segments.length; i++) {
            if(!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}

