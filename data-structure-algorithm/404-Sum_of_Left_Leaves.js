/**
 * 
 *  Find the sum of all left leaves in a given binary tree.

    Example:

        3
      / \
      9  20
        /  \
      15   7

    There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
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
var sumOfLeftLeaves = function(root) {
  let sum = 0  
  let innerFunc = (node, flag) => {
    if (node) {
      if (flag && node.left == null && node.right == null) {
        sum = sum + node.val
      }
      innerFunc(node.left, true)
      innerFunc(node.right, false)
    }
  }
  innerFunc(root, false)
  return sum
};