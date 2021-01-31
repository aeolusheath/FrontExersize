/**
 * 
 * 
 * Given a (singly) linked list with head node root, write a function to split the linked list into k consecutive linked list "parts".

The length of each part should be as equal as possible: no two parts should have a size differing by more than 1. This may lead to some parts being null.

The parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.

Return a List of ListNode's representing the linked list parts that are formed.

Examples 1->2->3->4, k = 5 // 5 equal parts [ [1], [2], [3], [4], null ]
Example 1:
Input:
root = [1, 2, 3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The input and each element of the output are ListNodes, not arrays.
For example, the input root has root.val = 1, root.next.val = 2, \root.next.next.val = 3, and root.next.next.next = null.
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but it's string representation as a ListNode is [].
Example 2:
Input: 
root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
Output: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
Note:

The length of root will be in the range [0, 1000].
Each value of a node in the input will be an integer in the range [0, 999].
k will be an integer in the range [1, 50].

 * 
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
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */


/**
 * 
 * @param {} root 
 * @param {*} k
 * 
 * 数学题，比如总长度为N，分成k份
 * 如果N < K , 每一份为1，剩余的的为空
 * 如果N > K,  平均每一份基本长度为 N/K,  还剩下 N % K 份，将这个剩下的份数，依次放在前面第1到第N%K份里面
 * 
 *  
 */

 
var splitListToParts = function(root, k) {
    // 求出总长度
    let n = 0
    let node = root
    while(node != null) {
        n++
        node = node.next
    }

    // 求出基本宽度
    let basicWidth = Math.floor(n/k)
    let remain = n % k
    
    let ret = []

    let cur = root // 每一次将链表往后走    
    for (let i = 0; i < k; i++) {
        // 第 0 到 (remain - 1)的链表长度为 basicWidth + 1
        // 后面的链表长度为 basicWidth
        let h = cur
        let j = 0, end = i < remain ? (basicWidth + 1) : basicWidth
        while (j < end - 1) {
            if (cur != null) {
                cur = cur.next
            }
            j++
        } 
        // 现在h 是头，cur是尾部，我们需要将cur.next设置为null 并且保留cur的指针
        // 这句话在 上面 < end - 1成立，不然cur是在尾节点的下一个
        if (cur != null) {
            let n = cur.next
            cur.next = null
            cur = n
        }
        ret.push(h)
    }
    return ret
};


