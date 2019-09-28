/**
 * 617. Merge Two Binary Trees
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
 

Note: The merging process must start from the root nodes of both trees.
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

 // 和 100  判断相同的tree 是类似的
 //  错误
// var mergeTrees = function(t1, t2) {
//   // 合并两个二叉树
//   if (t1.val == null && t2.val == null) {
//     return null
//   }
//   if (t1.val !== null && t2.val !== null) {
//     t1.val = t1.val + t2.val
//     return t1
//   }

//   t1.val = t1.val || t2.val
//   t1.left = mergeTrees(t1.left, t2.left)
//   t2.righ = mergeTrees(t1.right, t2.right)
//   return t1
// };




var mergeTrees = function(t1, t2) {
  // 合并两个二叉树
  // 都为空
  if (t1 == null && t2 == null) {
    return null
  }
  // if (t1.val !== null && t2.val !== null) {
  //   t1.val = t1.val + t2.val
  //   return t1
  // }
  // t1为空 t2不为空
  if (t1 == null && t2 != null) {
    return t2
  }
  // t1 不为空 t2为空
  if (t1 != null && t2 == null) {
    return t1
  }
   
  t1.val = t1.val + t2.val
  t1.left = mergeTrees(t1.left, t2.left)
  t2.right = mergeTrees(t1.right, t2.right)
  return t1
};