/**
 * 
 * 
 * Given two non-empty binary trees s and t, 
 * check whether tree t has exactly the same structure and node values with a subtree of s.
 *  A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

    Example 1:
    Given tree s:

        3
        / \
      4   5
      / \
    1   2
    Given tree t:
       4 
      / \
     1   2
    Return true, because t has the same structure and node values with a subtree of s.
    Example 2:
    Given tree s:

         3
        / \
        4   5
        / \
      1   2
          /
        0
    Given tree t:
      4
      / \
     1   2
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */


 // 方法一
var isSubtree = function(s, t) {
    // 先遍历s，找到与t.root.val的值相等的节点
    // 然后如果遍历完t,每个点都都与s的相同
    let rootVal = t.val
    let iteratorFunc = (node) => {
      if (node != null) {
        // BUG 可能父节点和子节点是相等的，这里的判断就存在问题了[1, 1] [1]
        // 错误版本一 不需要判定值是否相等，直接判断是否两个树是否是一样的
        // if (node.val === rootVal) {
        //   return isEqualTree(node, t)
        // }
        // return iteratorFunc(node.left) || iteratorFunc(node.right)


        // 实际上不需要这样，只要遍历所有的节点，然后判断节点是否和t相等即可
        return isEqualTree(node, t) || iteratorFunc(node.left) || iteratorFunc(node.right)
      }
      if (node == null) return false
      
    }

    // 判断两个树是否相等
    let isEqualTree = (subS, t) => {
      if (subS == null && t == null) return true
      if (t == null || subS == null) return false
      if (t.val !== subS.val) return false
      return isEqualTree(subS.left, t.left) && isEqualTree(subS.right, t.right)
    }
    return iteratorFunc(s)
};


// 方法二
// 先序遍历，放到一个数组里面，但是先序遍历的时候，不能只遍历非空的数据。
// 比如上面的第二个例子是false，如果只遍历非空的，那么第二个例子是true,所以讲 空的子节点给加上
var isSubtree = function(s, t) {
  let preOrderStr = (node, isLeft) => {
     if (node == null) {
        return isLeft? 'lnull':'rnull'
     }
     return `#${node.val}` + preOrderStr(node.left, true) + preOrderStr(node.right, false)
  } 
  let sTree = preOrderStr(s, true)
  let tTree = preOrderStr(t, true)
  return sTree.indexOf(tTree) >= 0
}

