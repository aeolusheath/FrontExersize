/**
 *
 Given a binary tree, return the inorder traversal of its nodes' values.

  Example:

  Input: [1,null,2,3]
    1
      \
      2
      /
    3

  Output: [1,3,2]
  Follow up: Recursive solution is trivial, could you do it iteratively?
 *
 *
 */

// 94-二叉树的中序遍历

// 中序遍历
// method 1 递归

var inorderTraversal = function (root) {
  var result = []
  var helpFunc = function(root) {
    if (root != null) {
      helpFunc(root.left)
      result.push(root.val)
      helpFunc(root.right)
    }
  };
  helpFunc(root)
  return result
}

// 迭代
var inorderTraversal = function (root) {
  var result = []
  var stack = []
  var node = root
  while (node != undefined || stack.length != 0) {
    if (node != undefined) {
      stack.push(node)
      node = node.left
    } else {
      var par = stack.pop()
      result.push(par)
      node = par.right
      // stack.push(node) // push的条件一定是没有左子节点
    }
  }
  return result
}


