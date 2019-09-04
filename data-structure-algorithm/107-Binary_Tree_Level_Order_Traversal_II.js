/**
 * 
 * 
 * 
 *  Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

    For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
      / \
      9  20
        /  \
      15   7
    return its bottom-up level order traversal as:
    [
      [15,7],
      [9,20],
      [3]
    ]
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
 * @return {number[][]}
 */

// 宽度优先遍历

// 通过队列 queue 来实现 (while)
var levelOrderBottom = function(root) {
    if (!root.val) { return [] }
    var res = []
    // var node = root
    //使用queue队列 完成
    let queue = []
    queue.unshift(root)
    while (queue.length != 0) {
      let levelData = []
      let length = queue.length
      for (let i = 0; i < length; i++) {
        let item = queue.pop() // 先进先出
        levelData.push(item.val)
        if (item.left) {
          queue.unshift(item.left)
        }
        if (item.right) {
          queue.unshift(item.right)
        }
      }
      // for 循环执行完，就是每一层的数据遍历完
      res.unshift(levelData)
    }
    return res
};

// 通过递归来实现

var levelOrderBottom = function(root) {
  var res = []
  var helpFunc =  function(node, index, arr) {
    if (!node) return 
    // arr[index] = arr[index] || []
    if (res.length == level) res.push([])
    arr[index].push(node.val)
    if ( node.left ) { helpFunc(node.left, index + 1 , arr) }
    if ( node.right ) { helpFunc(node.right, index + 1 , arr) }
  }
  helpFunc(root, 0, res)
  res.reverse()
  return res
}

