
实现一个函数，找出一个整数数组中最大的奇数和最小的偶数，返回它们的和，如果最大奇数和最小偶数其中一个数不存在，返回null。

```javascript
  const getCertainNum = (arr)=>{
    let judgeOdd = item=>item%2!==0,
      judgeOven = item=>item%2===0
    let hasOdd = arr.some(judgeOdd),
      hasOven = arr.some(judgeOven)
    if(!hasOdd || !hasOven) 
      return null
    //没有做排序
    let odds = arr.filter(judgeOdd),
      evens = arr.filter(judgeOven)
    return evens[0] + odds[odds.length-1]
  }
```

  实现一个函数，将一个有序的数组完全随机打乱顺序。？ how to do