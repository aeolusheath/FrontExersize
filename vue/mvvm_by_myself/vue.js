function Vue(option = {}) {
  this.$option = option; // 代理
  this.computed = option.computed
  let el = this.$el = option.el;
  // 为什么要定义一个this._data
  // 我觉得是多余的, 我们把this._data去掉
  // let data = this._data = this.$option.data

  // 给加上_data 为内部data
  let data = this._data = this.$option.data

  addMonitor(data)
  // 监听数据的变化
  // 为啥不直接this.data = data ?
  // 因为这样的话就不能劫持数据了，不能定义set 和 get的方法
  // 略掉？
  // 做一个代理，我们可以将new Vue(...)._data.a 替换成 new Vue(...).data.a = 4
  for (let key in data) {
    Object.defineProperty(this, key, {
      configurable: true, // 该属性可以被改变 和 被删除
      get() {
        console.log("获取到了数据key: " + key, "value为" + this._data[key])
        return this._data[key]
      },
      set(newVal) {
        console.log("改变了数据key: " + key, "value为" + newVal)
        this._data[key] = newVal
      }
    })
  }

  // 数据劫持 就是监听数据的变化

  initComputed.call(this)

  // 编译html
  Compile(el, this)
  option.mounted.call(this)

}


// el 需要挂载到的docment元素
// vm 是Vue对象
function Compile(el, vm) {
  vm.$el = document.querySelector(el)
  let fragment = document.createDocumentFragment()
  // var child = vm.$el.firstChild

  // 文档碎片也要按照html定义的格式来
  while (child = vm.$el.firstChild) {
    fragment.appendChild(child);   // 此时将el中的内容放入内存中
  }

  // 替换掉html代码中的{{ }}
  var replace = (frag) => {
    Array.from(frag.childNodes).forEach(node => {
      let txt = node.textContent;
      let reg = /\{\{(.*?)\}\}/g;  // 正则匹配{{}}
      if (node.nodeType === 3 && reg.test(txt)) {
        // RegExp 就是 a.b
        let arr = RegExp.$1.split('.')
        let val = vm
        arr.forEach(key => {
          val = val[key]
        })
        // 将{{ xx }} 的值替换成 真实的数据
        // 有bug
        // 方式一
        node.textContent = txt.replace(reg, val).trim()
        new Watcher(vm, RegExp.$1, val => {
          node.textContent = val
        });

        // 方式二
        // function replaceTxt() {
        //   node.textContent = txt.replace(reg, (matched, placeholder) => {
        //     new Watcher(vm, placeholder, replaceTxt);
        //     return placeholder.split('.').reduce((val, key) => {
        //         return val[key];
        //     }, vm);
        //   })
        // }
        // replaceTxt()

        // 仍然是闭包？！
        new Watcher(vm, RegExp.$1, newVal => {
          node.textContent = txt.replace(reg, newVal).trim();
        });
      }
      if (node.nodeType === 1) {
        let nodeAttr = node.attributes
        Array.from(nodeAttr).forEach(attr => {
          let name = attr.value
          let exp = attr.value // v-model="song"
          if (name.includes('v-')) {
            node.value = vm[exp] // this.song
          }

          // Watcher 里面调用get方法，get方法去给这个
          new Watcher(vm, exp, newVal => {
            node.value = newVal
          })

          node.addEventListener("input", e => {
            let newValue = e.target.value
            vm[exp] = newValue
          })

        })
      }
      // 还有子节点，递归替换
      if (node.childNodes && node.childNodes.length) {
        replace(node)
      }
    })
  }

  replace(fragment)

  vm.$el.appendChild(fragment)


}



// 监听数据
// 直接递归调用会堆栈溢出
function AddMonitor(data) {
  var sub = new Subject()
  for (let key in data) {
    let val = data[key]
    addMonitor(val); // 递归的去增加监听, data可能有嵌套的情况存在
    Object.defineProperty(data, key, {
      configurable: true, // 可以修改 or 删除属性
      get() {
        // 添加监听对象
        // sub.addObserver(new Observer())
        Subject.observer && sub.addObserver(Subject.observer)
        return val
      },
      set (newVal) {
        if (val === newVal)
          return
        // 注释的是我的思路
        // data[key] = newVal
        val = newVal
        addMonitor(newVal)
        sub.notify()
      }
    })
  }
}

function addMonitor(data) {
  // 如果不是对象的话就直接return掉
  // 防止递归溢出
  if (!data || typeof data !== 'object') return;
  return new AddMonitor(data);
}




// 观察者模式
// 辅助方法
function Subject() {
  this.observers = []
}
Subject.prototype.addObserver = function (ob) {
  this.observers.push(ob)
}
// this 可要可不要，确定subject 是否合法
// data 是通知订阅着的消息，可以是数据什么的
Subject.prototype.notify = function (data) {
  this.observers.forEach(item => {
    item.update(data)
  })
}


// 指定观察的对象
// function Observer(sub) {
function Observer() {
  // this.subject = sub
}
Observer.prototype.update = function (data) {
  console.log("观察的对象发生了变化: " + data)
}

// 我们上面这个Observer必须要和vue关联起来
// 这样写肯定是不行的
// vm vue对象
// exp 模板里面的{{a.b}}
// fn 替换模板里面的数据
function Watcher(vm, exp, fn) {
  this.vm = vm
  this.fn = fn
  this.exp = exp

  // complie 去 获取值的时候
  Subject.observer = this
  let arr = exp.split('.')
  let val = vm
  arr.forEach(key => {
    val = val[key]
  })
  Subject.observer = null
}

Watcher.prototype.update = function () {
  console.log("update调用了--->>>")
  let arr = this.exp.split('.')
  let val = this.vm
  arr.forEach(key => {
    val = val[key]
  })
  this.fn(val)
}

// 需要完善，实际上computed:{}
// 里面的属性可能是一个对象 而不是一个函数
/**
 *
 * {
 *
 * }
 *
 */
function initComputed() {
  let vm = this
  const computedObj = vm.computed
  for (key in computedObj) {
    let fn = computedObj[key]
    vm[key] = fn.call(vm)
  }
}




