/**
 *
 * Given a binary tree, determine if it is a valid binary search tree (BST).

  Assume a BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than the node's key.
  The right subtree of a node contains only nodes with keys greater than the node's key.
  Both the left and right subtrees must also be binary search trees.


  Example 1:

      2
    / \
    1   3

  Input: [2,1,3]
  Output: true
  Example 2:

      5
    / \
    1   4
      / \
      3   6

  Input: [5,1,4,null,null,3,6]
  Output: false
  Explanation: The root node's value is 5 but its right child's value is 4.
 *
 *
 */

// 98-验证搜索二叉树
// 方法一 递归

function help() {
  var result = []
  (function recursion(root) {
    if (root != null) {
      recursion(root.left)
      result.push(root.val)
      recursion(root.right)
    }
  })()
  //todo 看result是否是一个升序队列
  
}






// 方法二 循环
// 实际上就是中序遍历的实现，根节点永远大于左子节点，小于右子节点
var isValidBST = function(root) {
    return iteraterTree(root)
};

// 栈   先进后出 stack
// 队列 先进先出 queue

// 中序遍历思路
// 1，建立一个栈
// 2，根节点进栈，遍历左子树
// 3，如果左子树为空，则将根节点出栈，输出根节点，遍历右子树
function iteraterTree(root) {
  // 可以不用一个数组去存，用一个变量即可,看下面的 isBstHelp方法
  var node = root
  var stack = []
  var result = []
  while (node != null  || stack.length != 0) {
    if (node != null) {
      stack.push(node)
      node = node.left
    } else {
      var topNode = stack.pop()
      var min =  !result[result.length - 1] ?  Number.NEGATIVE_INFINITY : result[result.length - 1].val
      console.log(min, topNode.val)
      if (min >= topNode.val) {
        return false
      }
      result.push(topNode)
      node = topNode.right
    }
  }
  return true
}

// 中序遍历
function isBstHelp(root) {
  var stack = []
  var node = root
  var seq = Number.NEGATIVE_INFINITY
  while (node != null || stack.length != 0) {
    if (node != null) {
      stack.push(node)
      node = node.left
    } else {
      temp = stack.pop
      if (seq >= temp.val) return false
      seq = temp.val
      node = temp.right
    }

  }

}