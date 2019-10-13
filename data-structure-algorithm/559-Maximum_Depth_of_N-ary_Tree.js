/**
 * 
 * 
 * Given a n-ary tree, find its maximum depth.

  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  For example, given a 3-ary tree:
 * 
 */

// 求n层树的最大层级
// 参考二叉树的最大深度
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0
  var min = Number.NEGATIVE_INFINITY
  const iteratorFunc = (node, index) => {
    if (node) {
      if ( node.children.length ==0 ) {
        min = Math.max(min, index++)
      }
      for(let i of node.children) {
        iteratorFunc(i, index + 1)
      }
    }
  }
  iteratorFunc(root, 1)
  return min
};