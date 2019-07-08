// 关于这个例子的由来:  https://juejin.im/post/58cf180b0ce4630057d6727c?utm_source=gold_browser_extension
var tasks = []
for (var i = 0; i< 5; i++){
  tasks.push(new Promise(resolve=>{
    (function(j) {
      setTimeout(()=>{
        console.log(new Date(), j)
        resolve()
      }, j * 1000)
    })(i)
  }))
}

Promise.all(tasks).then(()=>{
  console.log('tasks 里面所有的都已经正确的解析了， 现在走的是Promise.all方向')
})