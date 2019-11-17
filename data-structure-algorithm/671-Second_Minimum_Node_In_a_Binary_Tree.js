/**
 * 
  
    Given a non-empty special binary tree consisting of nodes with the non-negative value, 
    
    where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, 
    
    then this node's value is the smaller value among its two sub-nodes. 
    
    More formally, the property root.val = min(root.left.val, root.right.val) always holds.

    Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

    If no such second minimum value exists, output -1 instead.

    Example 1:

    Input: 
        2
      / \
      2   5
        / \
        5   7

    Output: 5
    Explanation: The smallest value is 2, the second smallest value is 5.
    

    Example 2:

    Input: 
        2
      / \
      2   2

    Output: -1
    Explanation: The smallest value is 2, but there isn't any second smallest value.
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
 * @param {TreeNode} root
 * @return {number}
 */

 // simple answer 。 遍历树然后排序，找出第二小；
var findSecondMinimumValue = function(root) {
    let set = new Set()
    let iterator = (node) => {
      if (node) {
        set.add(node.val)
        iterator(node.left)
        iterator(node.right)
      }
    }
    iterator(root)
    let rr = [...set].sort((a, b)=>a-b)
    if (arr.length >=2) {
      return arr[1]
    } else {
      return -1
    } 
};


// 遍历的时候就做比较，一开始的思路只需要遍历第一层和第二层，然后发现这肯定是错误的，因为可能出现第一层和第二层相等，第三层才开始出现大于minVal的梳子
var findSecondMinimumValue = function(root) {
  if (root == null) return -1
  let minVal = root.val
  let sec = null
  let iterator = (node) => {
    if (node) {
      let curVal = node.val
      if (curVal > minVal && sec == null) {
        sec = curVal
      } 
      if (curVal < sec && curVal > minVal ) { // curVal > minVal 必须加上 
        sec = curVal
      }
      iterator(node.left)
      iterator(node.right)
    }
  }
  iterator(root)
  return sec || -1
};

// 官方答案的第二种办法，和上面类似
var findSecondMinimumValue = function(root) {
  let min1 = root.val
  let ans = Infinity
  let iterator = (node) => {
    if (node) {
      if (min1 < node.val && node.val < ans) {
        ans = node.val
      }
      iterator(node.left)
      iterator(node.right)
    }
  }
  iterator(root)
  return ans === Infinity ? -1 : ans
};

