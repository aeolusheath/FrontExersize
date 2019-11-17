/**
 * 
 * 
 * Given a binary tree, determine if it is height-balanced.

    For this problem, a height-balanced binary tree is defined as:

    a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

    Example 1:

    Given the following tree [3,9,20,null,null,15,7]:

        3
      / \
      9  20
        /  \
      15   7
    Return true.

    Example 2:

    Given the following tree [1,2,2,3,3,null,null,4,4]:

          1
          / \
        2   2
        / \
      3   3
      / \
    4   4
    Return false.

    1

       2
       
          3

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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let flag = true
  var innerFunc = (node)=>{
    if (node) {
        if (node.left == null && node.right == null) return 1
        let leftHeight = innerFunc(node.left) + 1
        let rightHeight = innerFunc(node.right) + 1
        // 有必要加上flag，避免无意义的多次运算
        if (Math.abs(leftHeight - rightHeight) > 1 && flag) {
          flag = false
        }
        return Math.max(leftHeight, rightHeight)
    } else {
      return 0
    }
  }
  innerFunc(root)
  return flag
};



