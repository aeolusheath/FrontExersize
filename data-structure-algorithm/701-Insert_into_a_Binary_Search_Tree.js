/**
 * 
 * 
 * Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. 
 * 
 * Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

    Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

    For example, 

    Given the tree:
            4
          / \
          2   7
        / \
        1   3
    And the value to insert: 5
    You can return this binary search tree:

            4
          /   \
          2     7
        / \   /
        1   3 5
    This tree is also valid:

            5
          /   \
          2     7
        / \   
        1   3
            \
              4
 * 
 * 
 * 
 *     
 * 
----------------------------
指定下面的二叉树
    3

  6   15
      
     9   19
----------------------------
插入14 的结果是什么
   3

  6   15
      
     9    19
        
       14

----------------------------
插入16 的结果是什么
    3

  6   15
      
     9     19

         16

----------------------------

        
 * 
 * 
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
 * @param {TreeNode}
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
   if (root == null) return null
  //  let node = new TreeNode(val)
    //  if (val < node.val) {
    //     node.left = root
    //     return node
    //  }

    // 肯定要遍历这个树
    // 找到要插入的数据的位置
    let iteratorTree = (node) => {
      if (node == null) return
      if (val < node.val) {
          if (node.left == null) {
            // todo 那么就是这个节点的左子节点
            node.left = new TreeNode(val)
          }  else if (val < node.left.val) {
            // 递归
            // 它应该出现在当前node的左子树
            iteratorTree(node.left)
          } else if (val > node.left.val) {
            // todo 那么就是这个节点的左子节点 错误原因-- 没有正确理解搜索二叉树的定义
            // 它应该出现在node.left的右子树上面
            iteratorTree(node.left)
          }
      }
      if (val > node.val) {
         if(node.right == null) {
           // todo 那么就是这个节点的右子节点
           node.right = new TreeNode(val)
         } else if (val > node.right.val) {
           // 递归
           // 那么val 一定出现在node.right的右子树上面
           iteratorTree(node.right)
         } else if (val < node.right.val) {
          // todo 那么这里就是要插入的位置 并不是，错误原因和上面一致-- 没有正确理解搜索二叉树的顶你故意
          // 那么val 一定出现在 node.right的左子树上面
          iteratorTree(node.right)
         }
      }
    }
    iteratorTree(root)
    return root
};


// 优化版本
var insertIntoBST = function(root, val) {
  if (root == null) return null

  let insert = (node) => {
    if (node == null) return 
    if (val < node.val) {
      if (node.left == null) {
        node.left = new TreeNode(val) 
      } else {
        insert(node.left)
      }
    }
    if (val > node.val) { 
      if (node.right == null) {
        node.right = new TreeNode(val)
      }else {
        insert(node.right)
      }
    }
  }
}



// 并没有快多少
var insertIntoBST = function(root, val) {
  if (root == null) return null
  let insert = (node) => {
    if (node == null) return 
    if (val < node.val && node.left == null) { node.left = new TreeNode(val)}
    if (val > node.val && node.right == null) { node.right = new TreeNode(val)}
    if (val < node.val && node.left) { insert(node.left) }
    if (val > node.val && node.right) { insert(node.right) }
  }
}


// beat 100% 这不就是上面第二种吗
var insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) {
      if (!root.left) {
          root.left = new TreeNode(val);
      } else {
          insertIntoBST(root.left, val);
      }
  } else {
      if (!root.right) {
          root.right = new TreeNode(val);
      } else {
          insertIntoBST(root.right, val);
      }
  }
  return root;
};