/**
 * 
 * 
 * Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

  The root is the maximum number in the array.
  The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
  The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
  Construct the maximum tree by the given array and output the root node of this tree.

  Example 1:
  Input: [3,2,1,6,0,5]
  Output: return the tree root node representing the following tree:

        6
      /   \
    3     5
      \    / 
      2  0   
        \
          1
 * 
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 只超过了62%
// 想一下优化的点
var constructMaximumBinaryTree = function(nums) {
    function getMaxAndIndex(nums) {
      let max = Number.NEGATIVE_INFINITY;
      let index = null
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
          max = nums[i]
          index = i
        }
      }
      return [max, index]
    }
    // let root = new TreeNode(max)
    let innerFunc = (nums) => {
         if (nums.length == 0) return null
         let [max, index] = getMaxAndIndex(nums)
         // 求出
         let node = new TreeNode(max)
         // slice 前闭后开[,)
         let leftNums = nums.slice(0, index)
         let rightNums = nums.slice(index+1, nums.length)
         node.left = innerFunc(leftNums)
         node.right = innerFunc(rightNums)
         return node
    }
    return innerFunc(nums)
};

// 上面的函数是用递归解决了，但是每一次我们都复制了两个数组，实际上是没必要的，我们只需要传入索引范围即可
var constructMaximumBinaryTree = function(nums) {
  function getMaxAndIndex(nums, start, end) {
    let max = Number.NEGATIVE_INFINITY;
    let index = null
    for (let i = start; i <=end; i++) {
      if (nums[i] > max) {
        max = nums[i]
        index = i
      }
    }
    return [max, index]
  }
  // let root = new TreeNode(max)
  let innerFunc = (nums, start, end) => {
      //  if (nums.length == 0) return null
      //  if (start > end) return null
       let [max, index] = getMaxAndIndex(nums, start, end)
       if (max < 0) return null 
       let node = new TreeNode(max)
       node.left = innerFunc(nums, start, index - 1)
       node.right = innerFunc(nums, index + 1, end) // 忘掉slice的前闭后开
       return node
  }
  return innerFunc(nums, 0, nums.length - 1)
};