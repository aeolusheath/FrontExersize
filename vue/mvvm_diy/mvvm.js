function Mvvm(options = {}) {
  this.$options = options
  let data = this._data = this.$options.data
  this.data = data 
  // 让我们可以直接这样： vm = new Mvvm()
  // vm.data.a = 1

  
  // console.log('dddd')
  // 数据劫持, 为啥有这一步，因为我们需要监听数据
  // 如果数据变化的话，我们需要重新渲染页面
  // 这里会用到观察者模式
  Observe(data)
  // console.log(data, '最终的结果是啥---------------》》》》》》》')
  console.log('有多少个Dep 也就是Subject', i)
  // 这个数据代理是有问题的，通过mvvm.a = 5 没有出发监听模式
  for (let key in data) {
    Object.defineProperty(this, key, {
        configurable: true,
        get() {
          return this._data[key]; // 如this.a = {b: 1}
        },
        set(newVal) {
          this._data[key] = newVal;
        }
    });
  }
  Compile(this.$options.el, this)
}

var i = 1
// 数据劫持 或者说 数据监听
function Observe(data) {
  let dep = new Dep() //定义subject
  i++
  if(!data || typeof(data) !=='object') return //
  // 劫持 就是在 set get 函数里面增加逻辑
  // 请注意 for in 会遍历prototype而来的属性
  for(let key in data) {  
    let val = data[key]
    // console.log(val, key, 'val----->>>>>>>>>')
    Observe(val) // 递归监听所有的value，这样我们data里面最底层的层级的数据变化也能监听到
    Object.defineProperty(data, key, {
      configurable: true, // 是否能够使用delete
      enumerable: true, // 是否可以通过 for in 遍历
      get() {
        // console.log('添加watcher到Subject------>>>>>>>>>>>>>')
        if(Dep.target) {
          console.log(Dep.target, '添加watcher------>>>>>>>>>>>>>' )
          console.log(dep, '当前的dep对象----->>>>>>>>>>>>>>>>>>>')
        }
        Dep.target && dep.addSub(Dep.target) // 为什么在这里添加订阅，猜测楼主的意思是对所有绑定到页面的元素才去监听
        return val
      },
      set(newVal) {
        if(val === newVal)
          return 
        val = newVal
        console.log(key + '的值 发生了变化') 
        Observe(newVal)// 若新设置的值为对象，我们也能监听到该对象的某一个key->value的变化
        // 这里发生了变化之后，我们应该通知所有订阅该数据的对象
        dep.notify()
      }
    })
  }
}



//编译 将template模板 替换成 纯html

function Compile(el, vm) {
  // 将元素以及子元素挂载到，实例上
  vm.$el = document.querySelector(el)
  // 创建一个空白的文档片段
  let fragment = document.createDocumentFragment()

  // console.log(vm.$el, 'vm.$el----')

  while (child = vm.$el.firstChild) {
    fragment.appendChild(child);   // 此时将el中的内容放入内存中
  }
  //对el里面的内容进行替换
  function replace(frag) {
    Array.from(frag.childNodes).forEach(node=>{
      let txt = node.textContent;
      let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}  .表示除了换行符号\n意外的任意字符

      if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}
        function replaceTxt(){
          node.textContent = txt.replace(reg, (matched, placeholder) => {
            // console.log(placeholder, 'placeholder')
            console.log('初始化这个watcher---->>>>')
            new Watcher(vm, placeholder, replaceTxt);   // 监听变化，进行匹配替换内容

            let result =  placeholder.split('.').reduce((val, key) => {
                return val[key]; 
            }, vm)
            // console.log(xxx, 'result')

            // console.log('placeholder', placeholder, '\n', 'matched', matched, '\n', 'result', result)
            return result
          })
        }
        replaceTxt()
        // console.log(RegExp.$1); // 匹配到的第一个分组 如： a.b, c
        // let arr = RegExp.$1.split('.');
        // let val = vm;
        // arr.forEach(key => {
        //     val = val[key];     // 如this.a.b //通过遍历来做
        // });
        // // 用trim方法去除一下首尾空格
        // node.textContent = txt.replace(reg, val).trim();  
        
        // // 监听变化
        // // 给Watcher再添加两个参数，用来取新的值(newVal)给回调函数传参
        // console.log('初始化watcher----------------------------->>>>>>>>， 也就是observer',  RegExp.$1)
        // new Watcher(vm, RegExp.$1, newVal => {
        //   node.textContent = txt.replace(reg, newVal).trim();    
        // })

      }
      // 如果还有子节点，继续递归replace
      if (node.childNodes && node.childNodes.length) {
        replace(node);
      }
    })
  }

  replace(fragment);  // 替换内容
  console.log(fragment, '--------->>>>>>>>>>>>>..ttttttttttttttttttttttttttttttttttttttttttttttt')
  vm.$el.appendChild(fragment);   // 再将文档碎片放入el中    
}



// 发布订阅模式  订阅和发布 如[fn1, fn2, fn3]
function Dep() {
  // 一个数组(存放函数的事件池)
  this.subs = [];
}
Dep.prototype = {
  addSub(sub) {   
      this.subs.push(sub);    
  },
  notify() {
      // 绑定的方法，都有一个update方法
      this.subs.forEach(sub => sub.update());
  }
};
// 监听函数
// 通过Watcher这个类创建的实例，都拥有update方法
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp
    // 添加一个事件
    // 这里我们先定义一个属性
    // console.log('将Subject 和 Watcher 或者观察者关联起来 通过Dep.target-------')
    console.log('现在Watcher里面，给Dep增加一个属性target')
    Dep.target = this; // 建立Subject 和 Observer的关系  keyword？？？？？？？？？？？？？？？？？？？？？？
    let arr = exp.split('.')
    let val = vm;
    arr.forEach(key => {    // 取值
      val = val[key]     // 获取到this.a.b，默认就会调用get方法
    });
    Dep.target = null
}
Watcher.prototype.update = function() {
    // notify的时候值已经更改了
    // 再通过vm, exp来获取新的值
    console.log('update---->>>>>>>')
    let arr = this.exp.split('.');
    console.log('当前的exp--->>>', arr)
    let val = this.vm;
    arr.forEach(key => {    
        val = val[key];   // 通过get获取到新的值
    });
    console.log(val, '值---->>>>>')
    this.fn(val);   // 将每次拿到的新值去替换{{}}的内容即可
};






// 发布订阅

// // 发布订阅模式  订阅和发布 如[fn1, fn2, fn3]
// function Subject() {
//   this.observers = [];
// }
// Subject.prototype = {
//   attachObserver(observer) {   
//       this.observers.push(observer);    
//   },
//   notify() {
//       // 绑定的方法，都有一个update方法
//       this.observers.forEach(observer => observer.update());
//   }
// };

// // 


// // 监听函数
// // 通过Watcher这个类创建的实例，都拥有update方法
// function Watcher(fn) {
//   this.fn = fn;   // 将fn放到实例上
// }
// Watcher.prototype.update = function() {
//   this.fn();  
// };

