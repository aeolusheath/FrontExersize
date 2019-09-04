/**
 * 
  Given a binary tree, return the preorder traversal of its nodes' values.

  Example:

  Input: [1,null,2,3]
    1
      \
      2
      /
    3

  Output: [1,2,3]
  Follow up: Recursive solution is trivial, could you do it iteratively?
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

 // 二叉树的先序遍历  wrong method
var preorderTraversal_wrong = function(root) {
  let result = []
  var helpFunc = (node)=>{
    while(node.left || node.right) {
      if(node.left) {
        result.push(node.left.val)
        node = node.left
        helpFunc(node)
      }
      result.push(node.val)
      if(node.right) {
        result.push(node.right.val)
        node = node.right
        helpFunc(node)
      }
    }
  }
  helpFunc(root)
  return result
};

// 正确的递归方法 既然用了递归 为啥还用while
var preorderTraversal = function(root) {
  var result = []
  var helpFunc = function(node) {
    if (node) {
      result.push(node.val)
      if (node.left) { helpFunc(node.left) }
      if (node.right) {helpFunc(node.right)}     
    }
  }
}


// 非递归 stack 先进后出 push pop
var preorderTraversal = function(root) {
  var result = []
  var stack = []
  stack.push(root)
  while (stack.length !=0 ) {
    var item = stack.pop()
    result.push(item.val)
    // 请注意left 和right的顺序，因为是先进后出，所以最终的顺序是 root left right
    if (item.right) {stack.push(item.right)}
    if (item.left) {stack.push(item.left)}
  }
  return result
}

