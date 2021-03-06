/**
 * 
 * Given a binary tree, find its maximum depth.

  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Note: A leaf is a node with no children.

  Example:

  Given binary tree [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  return its depth = 3.
 * 
 * 
 */

 // 常见的，最大深度
 // 深度优先【先序 后序  中序】
var maxDepth = function(root) {
  let max = 0
  function innerFunc(node, dep) {
      if (node) {
        if (node.left == null && node.right == null) {
          max = Math.max(max, dep)
        }
        innerFunc(node.left, dep + 1)
        innerFunc(node.right, dep + 1)
      }
  }
  innerFunc(root, 1)
  return max
};

// 用递归的另外一种办法，求最大深度
// 按照常用方法计算一个节点的深度：max(depth of node.left, depth of node.right) + 1
// 边界没有控制好 - 错误
var maxDepth = function(root) {
  // 感觉这是一个后序遍历 ？？？
  function innerFunc(node) {
    if (node) {
      if (node.left == null && node.right == null) return 1 // 这护代码注释之后也能通过，不过竟然只有14.96的超过率
      return Math.max(innerFunc(node.left) + 1, innerFunc(node.right) + 1)
    } else {
      return 0
    }
  }
  return innerFunc(root)
}