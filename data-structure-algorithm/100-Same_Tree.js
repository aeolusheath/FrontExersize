/**
 * 
 * 
 *  
 *  Given two binary trees, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

    Example 1:

    Input:     1         1
              / \       / \
            2   3     2   3

            [1,2,3],   [1,2,3]

    Output: true
    Example 2:

    Input:     1         1
              /           \
            2             2

            [1,2],     [1,null,2]

    Output: false
    Example 3:

    Input:     1         1
              / \       / \
            2   1     1   2

            [1,2,1],   [1,1,2]

    Output: false
 * 
 * 
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 递归
var isSameTree = function(p, q) {
  if (p == null && q == null) return true
  if (p ==null || q == null) return false
  if (p.val != q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

// 迭代
// 后序遍历
var isSameTree = function(p, q) {
  // var check = (p, q) => {
  //   if (p == null && q == null) return true
  //   if (p == null || q == null) return false
  //   return p.val === q.val 
  // }
  if (p == null && q == null) return true
  if (p == null || q == null)return false
  var stackP = []
  var stackQ = []
  stackP.push(p)
  stackQ.push(q)
  while(stackP.length !== 0 || stackQ.length !== 0) {
    var pNode = stackP.pop()
    var qNode = stackQ.pop()
    if (pNode == null && qNode == null) continue
    if (pNode == null || qNode == null) return false
    if (pNode.val != qNode.val) return false // true则继续往下一步
    stackP.push(pNode.right)
    stackP.push(pNode.left)
    stackQ.push(qNode.right)
    stackQ.push(qNode.left)
  }
  return true
}

// 非迭代
// 先序遍历
var isSameTree = function(p, q) {
  if (p == null && q == null) return true
  if (p == null || q == null)return false
  var stackP = []
  var stackQ = []
  stackP.push(p)
  stackQ.push(q)
  while(stackP.length !== 0 || stackQ.length !== 0) {
    var pNode = stackP.shift()
    var qNode = stackQ.shift()
    if (pNode == null && qNode == null) continue
    if (pNode == null || qNode == null) return false
    if (pNode.val != qNode.val) return false // true则继续往下一步
    stackP.push(pNode.left)
    stackP.push(pNode.right)
    stackQ.push(qNode.left)
    stackQ.push(qNode.right)
  }
  return true
}