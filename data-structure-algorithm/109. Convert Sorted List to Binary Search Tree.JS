/**
 * 
 * 
 
 Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

 

Example 1:


Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [0]
Output: [0]
Example 4:

Input: head = [1,3]
Output: [3,1]
 

Constraints:

The number of nodes in head is in the range [0, 2 * 104].
-10^5 <= Node.val <= 10^5


 * 
 * 
 * 
 */



 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 因为已经排序了，我们找到链表的中间节点，就是平衡二叉树的根节点


// 方法一，找到中间节点，后续没有思路了
var sortedListToBST = function(head) {
   // STEP 1 找到链表的中间节点
   let node = head
   if (!node) return null
   
   let s = node
   let f = node
   
   while (f != null && f.next != null) {
    s = s.next
    f = f.next.next
   }
   // 此时s是树的根节点

   // 知道了根节点，根节点在最中间，然后构造搜索二叉树，这个可以用什么思路呢
   // 二叉搜索树的中序遍历 结果 是一个 有序数组- or 链表
   let arr = []
   let n = head
   while(n !=null){
        arr.push(n.val)
        n = n.next
    }

    // STEP 2 现在所有数据都放在数组里面
    // 然后参考108题目，将有序数组构造成一棵高度平衡的二叉搜索树
    // 这样可以省略 STEP 1
    
};



// 方法二，参考108数组构造搜索二叉树，分割链表
var sortedListToBST = function(head) {

    const getRootNode = (node) => {
        if (!node) return null
        // if (node.next == null) return node // return treeNode not listnode
        if (node.next == null) {
            return new TreeNode(node.val)
        }
        let s = node
        let f = node

        let prevMiddle = null
        while(f && f.next) {
            prevMiddle = s
            s = s.next
            f = f.next.next
        }

        // 此时s在最中间，是rootNode
        let rootNode = new TreeNode(s.val)

        // 分割链表 s 是最中间的节点 prevMiddle是s前一个node
        // 前半部分
        if (prevMiddle) {
            prevMiddle.next = null
        }

        // prevMiddle.next = null
        rootNode.left = getRootNode(node)

        // 后半部分
        rootNode.right = getRootNode(s.next)
        return rootNode
    }
    return getRootNode(head)
}

// 方法三，找到中间点，不分割也能构造
var sortedListToBST = function(head) {
    // 关键点，获取链表中间节点方法， 可以设置起点和终点 [起点, 终点) 前闭后开

    // 当求一个链表中间节点，将right设置为null 
    const getMidNode = (left, right) => {
        let s = left
        let f = left
        while (f!= right && f.next !=right) {
            s = s.next
            f = f.next.next
        }
        return s
    }

    // let midNode = getMidNode(head, null)
    // let rootNode = new TreeNode(midNode.val)

    // let leftNode = getMidNode() //  需要两个参数，不构造一个方法不行
    // rootNode.left = 

    const buildTree = (left, right) => {
        // 跳出递归条件, 重要
        if (left === right) return null
        let midNode = getMidNode(left, right)
        let rootNode = new TreeNode(midNode.val)
        // rootNode.left = getMidNode(left, midNode)
        // rootNode.right = getMidNode(midNode.next, right)
        rootNode.left = buildTree(left, midNode)
        rootNode.right = buildTree(midNode.next, right)
        return rootNode
    }
    return buildTree(head, null)
}

