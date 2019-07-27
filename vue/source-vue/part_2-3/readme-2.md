# Object的变化是靠setter来追踪的，只要一个数据发生了变化，一定会出发setter

但是数组使用push操作，我们没有办法拦截到。【es6之前没有proxy 元编程能力，就是在原生方法前后增加操作】

所以用一个拦截器覆盖Array.prototype。

拦截器的原理

1， 获取到Array.prototype数组原型对象。
2， 基于该原型对象实例化一个对象，这个对象，这个对象实例本身定义改变数组的同名方法，在这个同名方法加上自己的逻辑，然后调用原型对象上的方法
3， 将传递进来的数组的proto指向这个对象
// 参考 array.js


#key
Array在getter中收集依赖，在拦截器【控制层mutator方法】中触发依赖。

但是拦截器只是拦截了 unshift push shift pop splice sort reverse 这几个方法

所以像 

`this.list[0] = 4`

`this.list.length = 0`

这两个操作不会触发re-render 和 watch。  

到目前为止，我们知道了 对象的添加、删除。数组的索引、长度的变更 在目前没法儿检测到。vue3 会使用proxy进行改进。
