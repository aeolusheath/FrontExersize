/**
 * 
 *  You are given a binary tree in which each node contains an integer value.

    Find the number of paths that sum to a given value.

    The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

    The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

    Example:

    root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

          10
        /  \
        5   -3
      / \    \
      3   2   11
    / \   \
    3  -2   1

    Return 3. The paths that sum to 8 are:

    1.  5 -> 3
    2.  5 -> 2 -> 1
    3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */

 // 遍历到每一个节点的时候，从这个节点出发，连续往父节点相加，如果等于sum 那么次数加1，必须从这个节点出发，这样保证不重复。如果从根节点触发 ，必然重复
var pathSum = function(root, sum) {
  let count = 0
  let innerFunc = (node, arr) => {
    if (node == null) return 
    arr.push(node.val)
    let tempSum = 0
    for (let i = arr.length - 1; i >= 0; i--) {
      tempSum += arr[i]
      if (tempSum == sum) {
        count++
      }
    }
    innerFunc(node.left, arr)
    innerFunc(node.right, arr)
    arr.pop()
  }
  innerFunc(root, [])
  return count
};

// 改版一下

var pathSum = function(root, sum) {

  let innerFunc = (node, arr, sum) => {
    if (!node) return 0
    arr.push(node.val)
    arr.push(node.val)
    let tempSum = 0
    let res = 0
    for (let i = arr.length - 1; i >= 0; i--) {
      tempSum += arr[i]
      if (tempSum == sum) {
        res++
      }
    }
    res += innerFunc(node.left, arr, sum)
    res += innerFunc(node.right, arr, sum)
    arr.pop()
    return res
  }
  return innerFunc(root, [], sum)
}