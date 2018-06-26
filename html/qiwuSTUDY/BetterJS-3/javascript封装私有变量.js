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
// 打印o1.getX() 结果是[1, 2, 'kevin ']
const o1 = getObj()
const o2 = getObj()

// 但是我们需要像JAVA或者其他面向对象一样 用new Foo(...args) 去构造一个对象，但是