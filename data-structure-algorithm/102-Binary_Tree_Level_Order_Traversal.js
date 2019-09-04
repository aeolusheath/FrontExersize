/**
 *
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

  For example:
  Given binary tree [3,9,20,null,null,15,7],
      3
    / \
    9  20
      /  \
    15   7
  return its level order traversal as:
  [
    [3],
    [9,20],
    [15,7]
  ]
 *
 *
 */

// 二叉树的层次遍历


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

// BFS 宽度优先遍历 同题目107类似
// 按照层次遍历 二叉树层次遍历
var levelOrder = function(root) {
    // var list = []
    if (root == null) return []
    return getRes(root)

};

function getRes(node) {
    var resultArr = []
    var queue = []
    queue.push(node)
    while (queue.length !== 0) {
        var list = []
        // 防止queue的变动，不要用queue.length当做index的上限
        var length = queue.length
        for (let i = 0; i < length; i++) {
            var item = queue.shift()
            list.push(item.val)
            if (item.left != undefined) {
                queue.push(item.left)
            }
            if (item.right != undefined) {
                queue.push(item.right)
            }
        }
        resultArr.push(list)
    }
    return resultArr
}