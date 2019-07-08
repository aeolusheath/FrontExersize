/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

          0
        / \
      -3   9
      /   /
    -10  5
 *
 *
 */

  // 108. 将有序数组转换为二叉搜索树

  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var helpFunc = function(nums, left, right) {
        if (left > right) return null
        // highlight??
        var mid = left + (( right - left)>>1)
        var cur = new TreeNode(nums[mid])
        cur.left = helpFunc(nums, left, mid - 1)
        cur.right = helpFunc(nums, mid + 1, right)
        return cur
    }
    return helpFunc(nums, 0, nums.length - 1)
};