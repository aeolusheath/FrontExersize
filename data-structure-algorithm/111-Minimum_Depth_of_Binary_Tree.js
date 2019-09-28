/**
 * 
 * 
 * 
 * Given a binary tree, find its minimum depth.

  The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

  Note: A leaf is a node with no children.

  Example:

  Given binary tree [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  return its minimum depth = 2.
 * 
 */
// 深度优先遍历
var minDepth = function(root) {
  var result = []
  var helpFunc = (node, index) => {
    // root
    if (node) {
      index++
      if (node.left == null && node.right == null )  {
        result.push(index)
      }
      if (node.left) { helpFunc(node.left, index) }
      if (node.right) { helpFunc(node.right, index) }
    }
  }
  helpFunc(root, 0)
  console.log(result, 'result------>>>>')
  result.sort((a, b)=>a - b)
  return result[0]
};

// 深度优先遍历优化
var minDepth = function(root) {
  // var result = []
  var minDepth = Number.MAX_VALUE;
  var helpFunc = (node, index) => {
    // root
    if (node) {
      index++
      if (node.left == null && node.right == null )  {
        // result.push(index)
        minDepth = Math.min(minDepth, index)
      }
      if (node.left) { helpFunc(node.left, index) }
      if (node.right) { helpFunc(node.right, index) }
    }
  }
  // helpFunc(root, 0)
  // result.sort((a, b)=>a - b)
  // return result[0]
  return minDepth
};