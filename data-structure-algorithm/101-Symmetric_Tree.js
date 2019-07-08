/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 是否是对称二叉树

// method 1 递归
// var isSymmetric = function(root) {
//     return isMirror(root, root)
// };

// function isMirror(t1, t2) {
//     // 顺序很重要
//     if (t1 == null && t2 == null) {
//         return true
//     }
//     if (t1 == null || t2 == null){
//         return false
//     }

//     return  (t1.val == t2.val)
//             && isMirror(t1.left, t2.right)
//             && isMirror(t1.right, t2.left)
// }

// method 2 迭代  宽度优先遍历 放入队列 先进先出
// 每一层相邻的元素必须相等，这里其实可以判断每一层是不是回文数组，但是就复杂了
var isSymmetric = function(root) {
    // return isMirror(root, root)
    var queue = []
    queue.push(root)
    queue.push(root)
    while(queue.length !== 0) {
        t1 = queue.shift()
        t2 = queue.shift()
        if (t1 == null && t2 == null) continue //这里也许还有其他元素
        if (t1 == null || t2 == null) return false
        if (t1.val != t2.val) return false
        queue.push(t1.left)
        queue.push(t2.right)
        queue.push(t1.right)
        queue.push(t2.left)
    }
    return true

};