/**
 * 
 * 
 * 
 * Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

    The length of path between two nodes is represented by the number of edges between them.

    

    Example 1:

    Input:

                  5
                / \
                4   5
              / \   \
              1   1   5
    Output: 2

    

    Example 2:

    Input:

                  1
                / \
                4   5
              / \   \
             4   4   5
    Output: 2
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
// 思路是正确的
var longestUnivaluePath = function(root) {
  // let map = {}
  // var iteratorTree = (node)=>{
  //   if(node) {
  //     let val = node.val
  //     if (node.left) {
  //       if (node.left.val === val) return 1
  //     }
  //   } else {
  //     return 0
  //   }
  // }

  let ans = 0
  // 像是一个后序遍历
  var arrowLength = (node) => {
    if (node == null) return 0
    let left = arrowLength(node.left)
    let right = arrowLength(node.right)
    let arrowLeft = 0, arrowRight = 0
    if (node.left && node.left.val == node.val) {
      arrowLeft = left + 1
    }
    if (node.right && node.right.val == node.val) {
      arrowRight = right + 1
    }
    ans = Math.max(ans, arrowLeft + arrowRight) // 但是一个节点的总最长路径 就是左 + 右 
    return Math.max(arrowLeft, arrowRight) // 当前节点下的单边的最长路径要么左，要么右边
  }

  arrowLength(root)
  return ans
};