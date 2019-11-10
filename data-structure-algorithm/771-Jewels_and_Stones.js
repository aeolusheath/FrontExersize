/**
 * 
 * 
 *  You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

    The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

    Example 1:

    Input: J = "aA", S = "aAAbbbb"
    Output: 3
    Example 2:

    Input: J = "z", S = "ZZ"
    Output: 0
    Note:

    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.
 * 
 */

 /**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 方法一，暴力解决办法，双重循环



// 方法二 map
var numJewelsInStones = function(J, S) {
    let map = new Map()
    for (let i of J) {
      map.set(i, 0)
    }
    
    for (let s of S) {
      if (map.has(s)) {
        map.set(s, map.get(s) + 1)
      }
    }
    return [...map.values()].reduce((sum, item) => sum + item, 0)
};

// 方法三  set
var numJewelsInStones = function(J, S) {
  let set = new Set()
  for (let i of J) {
    set.add(i)
  }
  let sum = 0
  for (let s of S) {
    if (set.has(s))
      sum++
  }
  return sum
};
