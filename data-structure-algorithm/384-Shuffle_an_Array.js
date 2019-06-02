/**
 *
 *  Shuffle a set of numbers without duplicates.

    Example:

    // Init an array with set 1, 2, and 3.
    int[] nums = {1,2,3};
    Solution solution = new Solution(nums);

    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
    solution.shuffle();

    // Resets the array back to its original configuration [1,2,3].
    solution.reset();

    // Returns the random shuffling of array [1,2,3].
    solution.shuffle();

 *
 */
// tag: shuffle
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// https://www.cnblogs.com/grandyang/p/5783392.html
var Solution = function (nums) {
  this.initialNums = nums
};

Solution.prototype.reset = function() {
  return this.initialNums.slice()
};

Solution.prototype.shuffle = function() {
  // 洗牌算法
  var retNums = this.initialNums.slice()
  var n = retNums.length - 1
  for (let i = n; i >= 0; i--) {
    // 比如 n 为 51， Math.random()的范围是 [0, 1)那么randomIndex 的范围为[0, 51)的整数
    // 没有通过测试, 明显不是每种排列组合的概率是相等的。反例：第一个最后一个数字永远不会为51
    // let randomIndex = Math.floor(n * Math.random())

    // 通过测试 范围为[i, n] n 是固定的
    //var randomIndex = Math.floor(Math.random() * (retNums.length - i)) + i;

    // 通过测试 范围为[0, i] 0 是固定的
    var randomIndex = Math.floor((i + 1) * Math.random())
    var temp = retNums[i]
    retNums[i] = retNums[randomIndex]
    retNums[randomIndex] = temp
  }
  return retNums
};

