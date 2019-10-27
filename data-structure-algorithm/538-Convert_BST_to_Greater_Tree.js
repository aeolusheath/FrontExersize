/**
 * 
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

    Example:

    Input: The root of a Binary Search Tree like this:
                  5
                /   \
              2     13

    Output: The root of a Greater Tree like this:
                18
                /   \
              20     13
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
 * @return {TreeNode}
 */

 // 二叉搜索树 左子节点 小于父节点，父节点 小于右子节点
var convertBST = function(root) {
    // 中序遍历  
    var innerFunc = (node) => {
      if (!node) return 0
      // if (node.left) {
      //   node.left.val = node.val +  
      // }
      if (node.left) {
        node.left.val = node.val + node.right.val
      }
    }
};

// 没有想出来，其实思路是对的，中序遍历，但是倒着来的中序遍历， 右-> 中 —>左
var convertBST = function(root) {
  let sum = 0
  var innerFunc = (node) => {
    if (!node) return 0
    nnerFunc(node.right)
    node.val = node.val + sum
    sum = node.val
    innerFunc(node.left)
  }
}