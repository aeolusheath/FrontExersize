/**
 * 
 * 
 * 1022. Sum of Root To Leaf Binary Numbers

Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.

 

Example 1:


Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
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
 * @return {number}
 */
// 计算每一条路径
// 先序遍历
var sumRootToLeaf = function(root) {
   var sum = 0
   const iterator = (node, val) => {
     if (node) {
       val = val + node.val
       if(!node.left && !node.right) {
        // 计算二进制树
        console.log(val)
        sum = sum + parseInt(val, 2)
        return
       }
       iterator(node.left, val)
       iterator(node.right, val)
     }
   }  
  iterator(root, '')
  return sum
};