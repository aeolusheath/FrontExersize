/**
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

  According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

  Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

  给定一个二叉搜索树，然后给两个节点，找到这两个节点的最小公共祖先，注意关键字 二叉搜索树, 根节点一点大于左子节点， 一定小于右子节点
  最近公共祖先一定是  p>=LCA  q<= LCA 或者p<=LCA q>=LCA  所以排除 p>node && q>node 和 p<node && q<node 即可
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 // tag: tree

  // 比较p 和 q，与每一个节点，如果都大于这个节点，那么往节点的右子节点，继续遍历
 // 比较p 和 q，与每一个节点，如果都小于这个节点，那么往节点的左子节点，继续遍历
 // 其他情况，如果一个>= 一个<= 一个>= 一个<  一个> 一个<=  一个= 一个=
 // 实际上还是遍历，如果节点的value 不满足上面两个条件，那么就返回这个节点



// 方法一，递归遍历
var lowestCommonAncestor = function(root, p, q) {
  let innerFunc = (node, p, q) => {
    if (p.val > node.val && q.val > node.val) {
      return innerFunc(node.right, p, q)
    }  else if (q.val < node.val && p.val < node.val) {
      return innerFunc(node.left, p, q)
    } else {
    return node
    }
  }
  return innerFunc(root, p, q)
};

// 方法二，迭代，实质上还是遍历
var lowestCommonAncestor = function(root, p , q) {
  let node = root
  while(node != null) {
    if (p.val > node.val && q.val > node.val) {
      node = node.right
    } else if  (p.val < node.val && q.val < node.val) {
      node = node.left
    } else {
      return node
    }
  }
}



