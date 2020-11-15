/**
 * 
  Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

  For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

  

  Example 1:

  Input: candies = [2,3,5,1,3], extraCandies = 3
  Output: [true,true,true,false,true] 
  Explanation: 
  Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
  Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
  Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
  Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
  Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
  Example 2:

  Input: candies = [4,2,1,1,2], extraCandies = 1
  Output: [true,false,false,false,false] 
  Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
  Example 3:

  Input: candies = [12,1,12], extraCandies = 10
  Output: [true,false,true]
 * 
 */

 /**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  // 时间换空间，多遍历两次，节约时间复杂度
  // 时间复杂度O(n) 空间复杂度O(1)
  let max = Number.NEGATIVE_INFINITY, len = candies.length;

  // 先找到最大值
  for (let i = 0; i < len; i++) {
    if (max < candies[i]) {
      max = candies[i]
    }
  }
 
  for (let j = 0; j < len; j++) {
    candies[j] = (candies[j] + extraCandies) >= max
  }

  return candies
};

console.log(kidsWithCandies([4,2,1,1,2], 1))

// [2,3,5,1,3]
console.log(kidsWithCandies([2,3,5,1,3], 3))