/**
 * 
 * 590. N-ary Tree Postorder Traversal

Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:

 



 

Return its postorder traversal as: [5,6,3,2,4,1].

 
Note:

Recursive solution is trivial, could you do it iteratively?
 * 
 * 
 * 
 */

 // 后续遍历

 /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var postorder = function(root) {
  const result = []
  let iteratorFunc = (node)=>{
    if (node) {
      if (node.children) {
        for (let i of node.children) {
          iteratorFunc(i)
        }
      }
      result.push(node.val)
    }
  }
  return result
};

// 非递归 还是用栈stack来实现 先进后出
var postorder = function(root) {
  const result = []
  var stack = [root]
  while (stack.length != 0) {
    var node = stack.pop()// 先进 后出【通过unshift一直往下面压】
    if (node) {
      result.unshift(node.val)
      if (node.children) {
        for (let i of node.children) {
          stack.push(i)
        }
      }
    }
  }
  return result
}