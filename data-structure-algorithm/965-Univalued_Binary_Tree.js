/**
 * 
 * 
 * A binary tree is univalued if every node in the tree has the same value.

  Return true if and only if the given tree is univalued.
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
// 遍历二叉树

// 递归
var isUnivalTree = function(root) {
  if (!root) {
    return false
  }
  const value = root.val
  var iteratorFunc = (node) => {
    if (node) {
      if (node.val != value ) {
        return false
      }
      if ( !iteratorFunc(node.left) ) { return false }
      if ( !iteratorFunc(node.right) ) { return false }
      // return true
    }
    // 一开始没有加这一句报错，因为在最底层为null，为null的话那么也是真的
    return true 
  }
  return iteratorFunc(root)
};

// 非递归
// 深度优先遍历  之 先序遍历 stack 先进后出   // 尝试后序遍历

var isUnivalTree = function(root) {
  if (!root) {
    return false
  }
  const value = root.val
  let flag = true
  const stack =[root]
  while (stack.length !==0) {
     var node = stack.pop()
     if (node) {
       if(node.val != value) {
         flag = false
         break
       }
       stack.push(node.right)
       stack.push(node.left)
     }
  }
  return flag
}