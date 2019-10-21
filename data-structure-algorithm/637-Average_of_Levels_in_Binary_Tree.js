/**
 * 
 * 
 *  Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
    Example 1:
    Input:
        3
      / \
      9  20
        /  \
      15   7
    Output: [3, 14.5, 11]
    Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
    Note:
    The range of node's value is in the range of 32-bit signed integer.
 * 
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
 * @param {TreeNode} root
 * @return {number[]}
 */

 // 广度优先遍历  层次遍历  使用两种方法 queue
var averageOfLevels = function(root) {
  let res = []
  let queue = [root]
  while(queue.length !== 0) {
    let len = queue.lengthß
    let total = 0
    for (let i = 0; i < len; i++) {
      let item = queue.shift()
      total = total + item.val
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
    }
    res.push(total/len)
  } 
  return res
};

// 使用递归

var averageOfLevels = function(root) {
  // 每一层放到一个数组里面，参考429
}