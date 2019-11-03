/**
 * 
 *  
 *  In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

    Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

    We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

    Return true if and only if the nodes corresponding to the values x and y are cousins.
 * 
 * 
 * 
 * 
 * Input: root = [1,2,3,4], x = 4, y = 3
   Output: false




   Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
   Output: true
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let xDepth = null,
        yDepth = null,
        xParentNode = null,
        yParentNode = null;
    // x 与 y的层级是否相等， x 与 y的父节点是否是同一个  
    const innerFunc = (node, parentNode, dep) => {
      if (!node) return 
      if (node.val == x) {
        xParentNode = parentNode
        xDepth = dep
      }
      if (node.val == y) {
        yParentNode = parentNode
        yDepth = dep
      }
      if (xDepth && yDepth) return
      if (node.left) innerFunc(node.left, node, dep+1)
      if (node.right) innerFunc(node.right, node, dep+1)
    }
    innerFunc(root, null, 1)
    return xDepth == yDepth && xParentNode !== yParentNode
};