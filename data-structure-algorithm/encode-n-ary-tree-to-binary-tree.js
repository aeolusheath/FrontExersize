/**
 * 
 * Design an algorithm to encode an N-ary tree into a binary tree and decode the binary tree to get the original N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. Similarly, a binary tree is a rooted tree in which each node has no more than 2 children. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that an N-ary tree can be encoded to a binary tree and this binary tree can be decoded to the original N-nary tree structure.

For example, you may encode the following 3-ary tree to a binary tree in this way:

 



 

Note that the above is just an example which might or might not work. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

Note:

N is in the range of [1, 1000]
Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
 * 
 * 
 */

 //  https://www.cnblogs.com/grandyang/p/9945345.html

// 二叉树的节点定义
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// 将普通的树转换为二叉树 原则就是 左孩子 右兄弟
const encodeTree = (root) => {
 if (root.length === 0) {
   return null
 }

 var help = (root) => {
    let rootNode = new TreeNode(root.val)
    let root = rootNode;
    let children = root.children || []
    if (children.length > 0) {
      rootNode.left = new TreeNode(children[0].val)
      // rootNode.right = help
      for (let i = 1; i < children.length; i++) {
        // 为什么没有想到指针迁移
        rootNode.right = help(children[i])
        rootNode = rootNode.right
      }
    }
    return rootNode
 }
 return help(root)
// var help = (list) => {
//   let node = null
//   if (list.length == 0) {
//     node = null
//   }
//   if (list.length == 1) {
//     node = new TreeNode(list[0].val)
//     // node.left = help(list[0].chidren) // 左孩子
//   }
//   for (let i = 1 ; i < list.length; i++) {
//     // node.right = 
//   }
//   return node
// }

}





// 普通的树的节点
function TreeNode(val, children) {
  this.val = (val === undefined ? 0 : val)
  this.children = (children === undefined ? [] : children)

}


// 将二叉树还原为一颗普通的树
var decodeTree = (root) => {
   // 二叉树 左孩子 右兄弟 【反推】
   if (!root) return null
   let rootNode = new TreeNode(root.val);

  //  var help = (node) => {
      
  //     let children = []
  //     if (node.left) {
  //       children.push(node.left)
  //     }
  //     node.children = children
  //  }
  let cur = root.left // 如果没有左孩子，那么以前的树没有子节点
  while (cur) {
    rootNode.children.push(decodeTree(cur))
    cur = cur.right
  }
  return rootNode;
}