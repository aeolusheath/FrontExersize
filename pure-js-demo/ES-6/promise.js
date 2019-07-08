let p =  new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let num = Math.random()
    try {
      if (num > 0.5)
        resolve(num)
      else
        reject(num)      
    }catch(err) {
      console.error(err, 'err------->>>>>>>>>>>>>>>')
    }
  }, 1000)
})
p.then((num)=>{
  console.log('fullfilled！ 大于0.5的数字：' + num)
}).catch(num=>{
  console.error('reject！小于' + num)
})
