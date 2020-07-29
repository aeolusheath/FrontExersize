// 依赖  被观察者 如果发生变化 通知 
let uid = 0
export default class Dep {
    constructor() {
        this.subs = []
        this.id = uid++
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    depend() {
        // 这里应该add Watcher.js的实例
        if (window.target) {
            // this.addSub(window.target) 
            window.target.addDep(this)
        }
    }
    notify() {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            sub[i].update()
        }
    }
}

function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}