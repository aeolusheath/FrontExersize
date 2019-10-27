/**
 * 
 * 
 * 
 * 
  Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

  Example 1:

  Input: 
      5
    / \
    3   6
  / \   \
  2   4   7

  Target = 9

  Output: True
  

  Example 2:

  Input: 
      5
    / \
    3   6
  / \   \
  2   4   7

  Target = 28

  Output: False
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    //遍历
    var map = {}
    var helpFunc = (node) => {
        if (!node) return 
        let remain = k - node.val
        if ( map[remain] ) {
          return true
        }
        map[node.val] = 1
        return helpFunc(node.left) || helpFunc(node.right)
    }
    return helpFunc(root) || false
};

// 改版了一下
var findTarget = function(root, k) {
  //遍历
  var map = {}
  var helpFunc = (node) => {
      if (!node) return false
      let remain = k - node.val
      if ( map[remain] ) {
        return true
      }
      map[node.val] = 1
      return helpFunc(node.left) || helpFunc(node.right)
  }
  return helpFunc(root)
};



// 使用set 看起来更简单一点

 var findTarget = function(root, k) {
   var set = new Set()
   var helpFunc = (node) => {
     if (!node) return false
     if (set.has(k - node.val)) { return true }
     set.add(node.val)
     return helpFunc(node.left) || helpFunc(node.right)
   }
   return helpFunc(root)
 }