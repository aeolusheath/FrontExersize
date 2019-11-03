/**
 * 
 * 
 *  Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

    Example:

    Input:

      1
        \
        3
        /
      2

    Output:
    1

    Explanation:
    The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 * 
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
 * @return {number}
 */

 // 求二叉搜索树 任意两个节点的差值的绝对值的最小值

 // 关键词： 二叉搜索树-中序遍历的结果是一个递增序列
var getMinimumDifference = function(root) {
   let min = Number.POSITIVE_INFINITY
   let pre = null
   const inOrder = (node) => {
     if (!node) return
     if (node.left) inOrder(node.left)
     if (pre!= 0) {
      min = Math.min(Math.abs(node.val - pre), min)
     }
     pre = node.val
     if (node.right) inOrder(node.right)
   }
   inOrder(root)
   return min 
};