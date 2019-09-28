/**
 * 
 *
 * 
 * 
 * Given a binary tree, return all root-to-leaf paths.

  Note: A leaf is a node with no children.

  Example:

  Input:

    1
  /   \
  2     3
  \
    5

  Output: ["1->2->5", "1->3"]

  Explanation: All root-to-leaf paths are: 1->2->5, 1->3 
 *
 * 
 */

// wrong helpFunc 第二个实际参数
var binaryTreePaths = function(root) {
    var result = []
    const helpFunc = (node, arr = [])=>{
      if (node) {
        arr.push(node.val)
        if (!node.left && !node.right) { 
          result.push(arr.join('->')) }
        else {
          helpFunc(node.left, arr)
          helpFunc(node.right, arr)
        }
        arr.pop()
      }
    }
    // helpFunc(node, result)  我的错误解法
    helpFunc(node, [])
    return result
};

// 不一定非要传递数组
var binaryTreePaths = function(root) {
  var result = []
  const helpFunc = (node, path)=>{
    if (node) {
      // arr.push(node.val)
      path = path === '' ? (node.val + "") : ( path + '->' + node.val )
      if (!node.left && !node.right) { result.push(path) }
      if (node.left) { helpFunc(node.left, path) }
      if (node.right) { helpFunc(node.right, path) }
    }
  }
  helpFunc(root, '')
  return result
};


