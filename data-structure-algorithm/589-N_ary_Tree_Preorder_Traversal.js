/**
 * Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:

 
Return its preorder traversal as: [1,3,5,6,2,4].
 * 
 * 
 */

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
// 普通树的先序遍历，遍历dom子节点是一样的
// 先序遍历
// 递归遍历 
var preorder = function(root) {
  const res = []
  var iteratorFunc=  (node) => {
      if(node) {
        res.push(node.val)
      }
      if (node && node.children) {
        for (let i of node.children) {
        iteratorFunc(i)
        }
      }
  }
  iteratorFunc(root)
  return res
};

// 非递归遍历用先进后出 stack 
var preorder = function(root) {
  let result = []
  let stack = []
  stack.push(root)
  while(stack.length != 0) {
    const node = stack.pop()
    if (node) {
      result.push(node.val)
      if (node.children) {
        for (let j = node.children.length; j--; j >= 0) {
          stack.push(node.children[j])
        }
      }
    }
  }
  return result
};