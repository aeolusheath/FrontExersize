/**
 *
 * 实现一个LazyMan，可以按照以下方式调用:
    LazyMan(“Hank”)输出:
    Hi! This is Hank!

    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    Hi! This is Hank!
    //等待10秒..
    Wake up after 10
    Eat dinner~

    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    Hi This is Hank!
    Eat dinner~
    Eat supper~

    LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
    //等待5秒
    Wake up after 5
    Hi This is Hank!
    Eat supper
 *
 */

// 我能想到的:   放一个队列里面，必定有异步操作
// 我没有想到的:
//    1，全部是异步操作，都在队列里面
//    2，队列里面 各个 item 如何 继续往下面走


// 思路 肯定不能是同步，LazyMan('Hank').sleep(5000).eat('')
// 如果同步的话，sleep(5000).eat('')必然报错
// 全部异步。。。放到队列里面 一个一个往下面调用
function LazyMan(name) {
  return new _LazyMan(name)
}

function _LazyMan(name) {
  this.name = name
  this.tasks = []
  const initFunc = getAsyncfun(() => {
    output('Hi! This is ' + this.name)
    // this.runNext()
    // 放这里不行。。没人去触发这个异步任务
    // 这里最开始注释掉，我只放了一个runNext在下面，发现只会执行这一次

    // 将链式调用进行下去
    this.runNext()
  })
  this.tasks.push(initFunc)
  // 启动，实际上这个函数很关键，在每一步都要做
  // 因为它做的是执行setTimeout这个函数，执行这个函数的目的就是将“输出动作”放到异步队列里面
  this.runNext()

  // 原po 是把这里用setTimeout()包起来，下一个task queue队列开始的时候，又等待下一个task queue才去执行，执行构造函数里面的异步内容

  // 我这里没有放到setTimeout里面，而是直接执行，直接执行实际上就是在主线程将构造函数里面的异步内容先放到task queue里面去，主线程执行完毕后只有一个task queue去执行
}

_LazyMan.prototype.eat = function (content) {
  const eatFunc = getAsyncfun(() => {
    output('Eat ' + content)
    this.runNext()
  })
  this.tasks.push(eatFunc)
  return this
}

_LazyMan.prototype.sleep = function (time) {
  const asyncFunc = getAsyncfun(() => {
    this.runNext()
  }, time)
  this.tasks.push(asyncFunc)
  return this
}

_LazyMan.prototype.firstSleep = function (time) {
    const asyncFunc = getAsyncfun(() => {
      this.runNext()
    }, time)
    this.tasks.unshift(asyncFunc)
    return this
}

_LazyMan.prototype.runNext = function () {
  const fn = this.tasks.shift()
  fn && fn()
}

function getAsyncfun(fn, time = 0) {
  return function () {
    setTimeout(
      fn, time
    )
  }
}

function output(content) {
  console.log(content)
}

// LazyMan('Hank')

// LazyMan('Hank').eat('dinner').eat('supper')

// LazyMan('Hank').eat('supper').eat('dinner')

// LazyMan('Hank').sleep(2000).eat('supper').sleep(5000).eat('dinner')

LazyMan('Hank').eat('supper').firstSleep(5000)






// 两个task queue 的例子
// (function () {
//   console.log('main stack')
//   setTimeout(() => {
//     console.log("1 in task queue one")
//     setTimeout(() => {
//       console.log("11 in task queue two")
//     }, 0)
//   }, 0)

//  setTimeout(() => {
//     console.log("2 in task queue one")
//     setTimeout(() => {
//       console.log("22 in task queue two")
//     }, 0)
//   }, 0)
// })()
