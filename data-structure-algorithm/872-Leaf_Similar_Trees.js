/**
 * 
 * 
 *  Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.



    For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

    Two binary trees are considered leaf-similar if their leaf value sequence is the same.

    Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
     
    叶子节点
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // 遍历两个树
    if (!root1 && !root2 ) {
      return true
    }
    let res1 = []
    let res2 = []
    var iteratorFunc = (node, res)=>{
      if (node) {
          if (!node.left && !node.right) {
            res.push(node.val)
          }
          iteratorFunc(node.left, res)
          iteratorFunc(node.right, res)
      }
    }
    iteratorFunc(root1, res1)
    iteratorFunc(root2, res2)
    console.log(res1, res2, '------>>>>')
    return res1.toString() === res2.toString()
};