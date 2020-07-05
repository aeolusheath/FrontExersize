/**
 * 
 * 
  根据中序遍历 与 后续遍历的结果构造一棵树
  Given inorder and postorder traversal of a tree, construct the binary tree.

    Note:
    You may assume that duplicates do not exist in the tree.

    For example, given

    inorder = [9,3,15,20,7]
    postorder = [9,15,7,20,3]
    Return the following binary tree:

        3
      / \
      9  20
        /  \
      15   7
 * 
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (!inorder || !postorder || inorder.length !== postorder.length) return null
  // 根据后序遍历去获取根节点，根据中序遍历去确定左子树和右子树
  // 记录中序遍历，各个节点的index, 确定左子树 右子树
  var map = {} 
  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i
  }
  let idx = postorder.length - 1  // 后序遍历依次取idx--
  // console.log(map)
  // var help = (left, right) => {
  //   if (left > right) return null
  //   let val = postorder[idx--]
  //   console.log(idx, val, 'idxx')
  //   if (!val) return null
  //   const rootIndex = map[val]
  //   const root = new TreeNode(val)
  //   root.right =  help(rootIndex + 1, right)
  //   root.left = help(left, rootIndex - 1)
  //   return root
  // }
  // return help(0, postorder.length - 1)

  var helper = (left, right) => {
    if (left > right) { return null }  
    // if (left < 0) return null
    let val = postorder[idx--]
    let root = new TreeNode(val)
    let rootIndex = map[val]
    root.right = helper(rootIndex + 1, right)
    root.left = helper(left, rootIndex - 1)
    return root
  }
  return helper(0, postorder.length - 1)
};

// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// [3,null,20,null,7,null,15,null,9]
// [3,9,20,null,null,15,7]

buildTree([9,3,15,20,7], [9,15,7,20,3])



var buildTree = function(inorder, postorder) {

    
  if (!inorder || !postorder || inorder.length !== postorder.length) return null
  
  // 获取inorder的每个index，区分左右子树
  const map = {}
  for (let i = 0; i < inorder.length; i++) {
      map[inorder[i]] = i
  }
  // 记录后序遍历的索引记录
  let rootMaxIndex = postorder.length - 1

  
  // 从后序遍历开始
  var helper = (leftIndex, rightIndex) => {

      if (leftIndex > rightIndex) { return null }
      console.log(leftIndex, rightIndex, rootMaxIndex, 'kevinkang')
      if (rootMaxIndex < 0) return null // 死循环
      // let rootVal = postorder[rightIndex] // 每一个根节点，从后序遍历里面取，每一个节点都是根节点  错误
      let rootVal = postorder[rootMaxIndex--] // 每一个根节点，从后序遍历里面取，每一个节点都是根节点
  
      let root = new TreeNode(rootVal)
      console.log(leftIndex, rightIndex, rootVal, rootMaxIndex, 'abcdef')

      let rootIndex = map[rootVal]
      // console.log(rootIndex, rootVal, 'kevinkang')
      
      root.right = helper(rootIndex + 1, rightIndex) // 需要先找右子树，因为后序遍历，倒序是 根 右子树 左子树
      // root.left = helper(0, rootIndex - 1) // 错误
      root.left = helper(leftIndex, rootIndex - 1)


      
      return root
  
  }
  
  return helper(0,  postorder.length - 1)
  
  
};