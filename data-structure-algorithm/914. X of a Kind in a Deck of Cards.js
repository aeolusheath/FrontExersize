/**
 * 


  In a deck of cards, each card has an integer written on it.

  Return true if and only if you can choose X >= 2 such that 
  
  it is possible to split the entire deck into 1 or more groups of cards, where:

  Each group has exactly X cards.
  All the cards in each group have the same integer.
  

  Example 1:

  Input: deck = [1,2,3,4,4,3,2,1]
  Output: true
  Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
  Example 2:

  Input: deck = [1,1,1,2,2,2,3,3]
  Output: false´
  Explanation: No possible partition.
  Example 3:

  Input: deck = [1]
  Output: false
  Explanation: No possible partition.
  Example 4:

  Input: deck = [1,1]
  Output: true
  Explanation: Possible partition [1,1].
  Example 5:

  Input: deck = [1,1,2,2,2,2]
  Output: true
  Explanation: Possible partition [1,1],[2,2],[2,2].
  

  Constraints:

  1 <= deck.length <= 10^4
  0 <= deck[i] < 10^4
  Accepted
  56,718
  Submissions
  164,886

 * 
 * 
 * 
 */


 /**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2 ) return false

  // 先找到最小次数的数字，这个基数是它来的
  let map = {}
  for (let i = 0; i < deck.length; i++) {
    let val = deck[i]
    if (map[val] == undefined) {
      map[val] = 1
    } else {
      map[val] = map[val] + 1
    }
  }

  // min 是group的单位
  // 判断其他相同的出现的次数 是否是min的倍数
  let values = Object.values(map)

  let min = Number.POSITIVE_INFINITY

  for (let k = 0; k < values.length; k++) {
    if ( values[k] < min ) {
      min = values[k]
    }
  }

  console.log(map, min)
  // 方法1，不能这样计算，错误的
  // 4，6 是true，但是求余是false
  // for (let j = 0; j < values.length; j++) {
  //   if (values[j] % min != 0) {
  //     return false
  //   }
  // }
  // 方法2，求最大公约数的思路，比如 4，14，21
  // 方法2，也是错误的，比如 6，8，9，不能分为相同的组
  // 我自己的想法是求min 与每个数的最大公约数是否不为1，其实最大公约数的思想是对的
  // 但是需要求values数组里面的所有数字的最大公约数是否>=2,有个技巧
  // for (let j = 0; j < values.length; j++) {
  //   if (getNum2(min, values[j]) == 1) {
  //     return false
  //   }
  // }

  // 方法3，暴力法，说了从 [2, X] , 我们从次数/x如果都能求余，那么可以
  // console.log(values, min)
  // let k = 2
  // while (k <= min) {
  //   let flag = true
  //   for (let j = 0; j < values.length; j++) {
  //       if(values[j] % k !==0) {
  //         flag = false
  //       }
  //   }
  //   k++
  //   if (flag) {
  //     return true
  //   }
  // }
  // return false

  // 方法4，对方法2的纠正，最大公约数的思路是对的
  // 但是方向错了，不是求min与所有values的公约数，是求values所有数字的最大公约数不能为1

  let g = values[0]
  for (let j = 1; j < values.length; j++) {
    g = getNum2(g, values[j])
  }
  return g >= 2
};


// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]))
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]))
// console.log(hasGroupsSizeX([1]))
// console.log(hasGroupsSizeX([1,1]))
// console.log(hasGroupsSizeX([1,1,2,2,2,2]))
// console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))


// console.log(hasGroupsSizeX([1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3]))

// 求两个数最大公约数，循环
function getNum2(a, b) {
  if (a ==0 || b == 0) return 0
  while( a % b != 0 ){
  　　var c = a % b;
    //  console.log(c, a, b)
  　　a = b;
  　　b = c;
  }    
    return b
}

// getNum2(3, -1)
// getNum2(200, 20)

// 求两个数最大公约数，递归
function getCd(a, b) {
  // if (a == 0 || b == 0) return 0
	return a == 0 ? b : getCd(b % a, a);
}

// 有细微区别，对于都是正数的情况结果是一致的
console.log(getNum2(-3, 1)) 
console.log(getCd(-3, 1))
