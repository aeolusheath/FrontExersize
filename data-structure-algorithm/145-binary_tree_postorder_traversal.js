/**
 * 
 * 
 * Given a binary tree, return the postorder traversal of its nodes' values.

  Example:

  Input: [1,null,2,3]
    1
      \
      2
      /
    3

  Output: [3,2,1]
  Follow up: Recursive solution is trivial, could you do it iteratively?
 * 
 */

// 二叉树的后序遍历 ， 二叉树的先序和中序和后序  指的是根节点相当于左右子节点。  先序遍历 root left right / 中序遍历 left root right / 后序遍历 left right root
// 递归
 var postorderTraversal = function(root) {
  var result = []
  var helpFunc = function(node) {
    if(node) {
      helpFunc(node.left)
      helpFunc(node.right)
      result.push(node.val)
    }
  }
  helpFunc(root)
  return result
};

// 非递归 深度优先遍历 stack 先进后出
var postorderTraversal = function(root){
  var result = []
  var stack = []
  stack.push(root)
  while (stack.length != 0) {
    var item = stack.pop()
    if(item) {
      result.unshift(item.val)
      if (item.left) { stack.push(item.left) }
      if (item.right) { stack.push(item.right) }
    }
    console.log(stack)
  }
  return result
}