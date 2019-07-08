// 创建一个Mvvm构造函数
// 这里用es6方法将options赋一个初始值，防止没传，等同于options || {}
function Mvvm(options = {}) {   
  // vm.$options Vue上是将所有属性挂载到上面
  // 所以我们也同样实现,将所有属性挂载到了$options
  this.$options = options;
  // this._data 这里也和Vue一样
  let data = this._data = this.$options.data;
  
  // 数据劫持
  observe(data);
  // console.log(this, 'thissss------11111111111111')

    // this 代理了this._data
  for (let key in data) {
    Object.defineProperty(this, key, {
        configurable: true,
        get() {
            return this._data[key];     // 如this.a = {b: 1}
        },
        set(newVal) {
            this._data[key] = newVal;
        }
    });
  } 
  // console.log(this, 'thissss------2222222')
  new Compile(options.el, this);  
}

// 创建一个Observe构造函数
// 写数据劫持的主要逻辑
function Observe(data) {
  let dep = new Dep();
  // 所谓数据劫持就是给对象增加get,set
  // 先遍历一遍对象再说
  for (let key in data) {     // 把data属性通过defineProperty的方式定义属性
      let val = data[key];
      observe(val);   // 递归继续向下找，实现深度的数据劫持
      Object.defineProperty(data, key, {
          configurable: true,
          get() {
            if(Dep.target) {
              console.log(Dep.target, '添加watcher------>>>>>>>>>>>>>' )
              console.log(dep, '当前的dep对象----->>>>>>>>>>>>>>>>>>>')
            }            
              Dep.target && dep.addSub(Dep.target);   // 将watcher添加到订阅事件中 [watcher]
              return val;
          },
          set(newVal) {   // 更改值的时候
              if (val === newVal) {   // 设置的值和以前值一样就不理它
                  return;
              }
              console.log('数据发生了变化------>>>>>>>>>>>>>')
              val = newVal;
              observe(newVal);
              dep.notify();   // 让所有watcher的update方法执行即可
          }
      });
  }
}

// 外面再写一个函数
// 不用每次调用都写个new
// 也方便递归调用
function observe(data) {
  // 如果不是对象的话就直接return掉
  // 防止递归溢出
  if (!data || typeof data !== 'object') return;
  return new Observe(data);
}


// 创建Compile构造函数
function Compile(el, vm) {
  // 将el挂载到实例上方便调用
  vm.$el = document.querySelector(el);
  // 在el范围里将内容都拿到，当然不能一个一个的拿
  // 可以选择移到内存中去然后放入文档碎片中，节省开销
  let fragment = document.createDocumentFragment();
  
  while (child = vm.$el.firstChild) {
      fragment.appendChild(child);    // 此时将el中的内容放入内存中
  }
  // 对el里面的内容进行替换
  function replace(frag) {
      Array.from(frag.childNodes).forEach(node => {
          let txt = node.textContent;
          let reg = /\{\{(.*?)\}\}/g;   // 正则匹配{{}}
          console.log('txttttt----->>>>', txt)
          if (node.nodeType === 3 && reg.test(txt)) { // 即是文本节点又有大括号的情况{{}}

              function replaceTxt(){
                node.textContent = txt.replace(reg, (matched, placeholder) => {
                  console.log(placeholder, 'placeholder')
                  new Watcher(vm, placeholder, replaceTxt);   // 监听变化，进行匹配替换内容

                  return placeholder.split('.').reduce((val, key) => {
                      return val[key]; 
                  }, vm)

                })
              }
              // console.log('之前的RegExp.$1 111', RegExp.$1); // 匹配到的第一个分组 如： a.b, c
              // let arr = RegExp.$1.split('.');
              // let val = vm;
              // // console.log( arr, 'dddDdddoooopppppp')
              // arr.forEach(key => {
              //     val = val[key];     // 如this.a.b
              // });
              // // 用trim方法去除一下首尾空格
              // node.textContent = txt.replace(reg, val).trim();
              // console.log('之前的RegExp.$1  222', RegExp.$1);
              //     // 监听变化
              // // 给Watcher再添加两个参数，用来取新的值(newVal)给回调函数传参  
              // console.log('初始化watcher----------------------------->>>>>>>>， 也就是observer',  RegExp.$1)              
              // new Watcher(vm, RegExp.$1, newVal => {
              //   node.textContent = txt.replace(reg, newVal).trim();    
              // });  
              replaceTxt()            
          }
          // 如果还有子节点，继续递归replace
          if (node.childNodes && node.childNodes.length) {
              replace(node);
          }
      });
  }
  
  replace(fragment);  // 替换内容
  
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
// 重写Watcher构造函数
function Watcher(vm, exp, fn) {
  this.fn = fn;
   this.vm = vm;
   this.exp = exp;
  // 添加一个事件
  // 这里我们先定义一个属性
   Dep.target = this;
   let arr = exp.split('.');
   let val = vm;
   arr.forEach(key => {    // 取值
      val = val[key];     // 获取到this.a.b，默认就会调用get方法
   });
   Dep.target = null;
}


Watcher.prototype.update = function() {
      // notify的时候值已经更改了
    // 再通过vm, exp来获取新的值
   let arr = this.exp.split('.');
   let val = this.vm;
   arr.forEach(key => {    
       val = val[key];   // 通过get获取到新的值
   });
  this.fn(val);   // 将每次拿到的新值去替换{{}}的内容即可
};

