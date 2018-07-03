/**
 * javascript 由于语言特性，不能像java或者其他面向对象一样简单的封装一些私有属性
 * 因为javascript可以动态构建对象，也可以通过new来构建，并且动态的新增修改key value
 * 只要能够访问到这个对象的 value的引用，就可以修改他【当然没有添加这个对象的默认setter方法】
 * 
 */

// 使用闭包来封装私有变量
function getObj(){
  let x = [1,2]
  let y = [3,4]
  let z = 3
  return {
    getX(){
      return x
    },
    getY(){
      return y
    },
    getZ(){
      return z
    },
    pushToX(val){
      x.push(val)
    },
    pushToY(val){
      y.push(y)
    }
  }
}
// 构造两个对象，并且这两个对象没有共享变量
// o1.getX()===o2.getX()  是false
// 但是问题是什么，实际上我们可以通过o1.getX()如果返回的x是一个引用类型的话
// 我们可以直接修改这个对象，比如 const temp = o1.getX()
// temp.push('kevin') 由于是传递的是引用，这样会直接影响o1的x对象
// 打印o1.getX() 结果是[1, 2, 'kevin']
const o1 = getObj()
const o2 = getObj()



// 但是我们需要像JAVA或者其他面向对象一样 用new Foo(...args) 去构造一个对象
// 可能你的思路是像下面这样
const Foo = (function(){
  let _x, _y
  return class {
    constructor(x, y) {
      _x = x
      _y = y
    }
    get X() {
      return _x
    }
  }
})()

// 这样的问题在哪里？ 实际上返回的这个匿名类 和_x, _y形成了一个闭包 所有Foo的实例共享的是一个_x,_y
// 举一个最简单的例子
// var foo1 = new Foo(1,2)  这个时候你查看foo1.x，返回的是2
// var foo2 = new Foo(4,5)  这时候foo1.x 也变成了4
// 所以上面的是不可行的


// 我们在往下看一下, 但是需要优化，如果new出来的对象没有被使用，Map里面占用的地址资源不会释放
// 所以要把Map 改成 WeakMap  WeakMap只接受对象做为键名（null除外）键名所指向的对象不计入垃圾回收机制，WeakMap不能遍历，不能清空
// 键是对象，如果这个对象被销毁，WeakMap对应的键值对自动消失
// WeakMap 结构有助于防止内存泄漏
const Foo2 = (function(){
  // 用map来缓存，因为map的key可以是对象，这样不会造成多个对象共享一个数据
  let _x = new Map(),
      _y = new Map()
  return class {
    constructor(x, y) {
      // 喂喂喂 map 不是普通的对象 不能像下面这样使用
      // _x[this] = x
      // _y[this] = y
      _x.set(this, x)
      _y.set(this, y)
    }
    get length(){
      const x = _x.get(this),
            y = _y.get(this)
      return Math.sqrt(x ** 2 + y ** 2)
    }
    get x(){
      return _x.get(this)
    }
  }
}())

// 更进一步的，重构一下
const privateMap = new WeakMap()

const Point = class{
  constructor(x, y) {
    privateMap.set(this, {x, y}) //将x y 拼成一个对象，就不用像上面那样一个一个取
  }
  get length(){
    let { x, y } = privateMap.get(this)
    return Math.sqrt(x ** 2 + y ** 2)
  }
}

// 更好的办法，用Symbol， Symbol 每一次生成一个不重复的UUID 
const _x = Symbol('x'), _y = Symbol('y')

const PointTwo = class{
  constructor(x, y) {
    this[_x] = x
    this[_y] = y
  }
  get length(){
    let x = this[_x],
      y = this[_y]
    return Math.sqrt(x ** 2 + y ** 2)      
  }
}