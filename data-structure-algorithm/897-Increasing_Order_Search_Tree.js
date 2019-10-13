/**
 * 
 * 
 * Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

    Example 1:
    Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

          5
          / \
        3    6
      / \    \
      2   4    8
    /        / \ 
    1        7   9

    Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

    1
      \
      2
        \
        3
          \
          4
            \
            5
              \
              6
                \
                7
                  \
                  8
                    \
                    9  
    Note:

    The number of nodes in the given tree will be between 1 and 100.
    Each node will have a unique integer value from 0 to 1000.
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
 * @return {TreeNode}
 */
// 中序遍历
// 优化---------->>>>>直接将node push到list里面就行，不要添加val 然后在循环里面去指定就行
var increasingBST = function(root) {
    var certaiNode =  new TreeNode()
    let head = certaiNode
    let list = []
    const iteratorFunc = (node) => {
      if (node) {
          iteratorFunc(node.left)
          list.push(node.val)
          iteratorFunc(node.right)
      }
    }
    iteratorFunc(root)
    for(let i = 0, len = list.length; i < len; i++) {
        head.val = list[i]
        head.right = (i !== len - 1)  ? new TreeNode() : null
        if (i !== len - 1 ) { 
          head = head.right
        }
    }
    return certaiNode
};



var increasingBST = function(root) {
  let list = []
  const iteratorFunc = (node) => {
    if (node) {
        iteratorFunc(node.left)
        list.push(node)
        iteratorFunc(node.right)
    }
  }
  iteratorFunc(root)
  for(let i = 0, len = list.length; i < len; i++) {
    list[i].left = null
    list[i].right = list[i + 1]
  }
  return list[0]
};

