/**
 * 
 * 
 * Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

  Assume a BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than or equal to the node's key.
  The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
  Both the left and right subtrees must also be binary search trees.
  

  For example:
  Given BST [1,null,2,2],

    1
      \
      2
      /
    2
  

  return [2].

  Note: If a tree has more than one mode, you can return them in any order.

  Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
// 简单的方法一
// 搜索二叉树的中序遍历是一个递增序列
var findMode = function(root) {
  let arr =[]
  let iterator = (node) => {
    if (node) {
      iterator(node.left)
      arr.push(node.val)
      iterator(node.right)
    }
  }
  iterator(root)
  let map = new Map()
  let ret = []
  let max = Number.NEGATIVE_INFINITY
  for (let i = 0; i < arr.length; i++){
    let cur =  arr[i]
    if (map.has(cur)) {
      let count = map.get(cur) + 1
      console.log(count, max, cur)
      if(count > max) {
        max = count
        ret = [cur]
      } else if (count == max) {
        ret.push(cur)
      }
      map.set(cur, count)
    } else {
      map.set(cur, 1)
      // ret.push(cur) // lost this line cause error
      // if statement is significant
      if (max <= 1) {
          ret.push(cur)
      }
    }
  }
  return ret
};

// 方法二
// 遍历二叉树的同时，可以同时求出map，不必要先求出arr 再求map

var findMode = function(root) { 
  let findMap = (node, m = new Map()) => {
    if (node) {
      findMap(node.left, m)
      if (m.has(node.val)) {
        m.set(node.val, m.get(node.val) + 1)
      } else {
        m.set(node.val, 1)
      }
      findMap(node.right, m)
    }
    return m
  }

  let m = findMap(root)
  let max = -1
  let res = []
  for (const val of m.values()) {
      max = Math.max(max, val)
  }
  for (const k of m.keys()) {
      if (m.get(k) === max) {
          res.push(k)
      }
  }
  return res
}

// much better?
var findMode = function(root) {
  if (!root) {
      return []
  }
  const m = findModeRec(root)
  let max = -1
  let res = []
  for (const val of m.values()) {
      max = Math.max(max, val)
  }
  for (const k of m.keys()) {
      if (m.get(k) === max) {
          res.push(k)
      }
  }
  return res
};

function findModeRec(curNode, m=new Map()) {
  if (m.has(curNode.val)) {
      m.set(curNode.val, m.get(curNode.val)+1)
  } else {
      m.set(curNode.val, 1)
  }
  if (curNode.left) {
      findModeRec(curNode.left, m)
  }
  if (curNode.right) {
      findModeRec(curNode.right, m)
  }
  return m
}