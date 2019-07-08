/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 一次遍历法
// var removeNthFromEnd = function(head, n) {
//     //  双指针
//     // let first = head
//     var i = 0;
//     var j = 0;

//     var dummy = new ListNode(0)
//     dummy.next = head

//     // 这种判断很烦躁
//     if (n === 1 && head.next == null) {
//         return null
//     }

//     var first = dummy
//     var second = dummy

//     // 首先i 遍历n次，j不动
//     // 然后n到终点，j开始遍历
//     while (i < n) {
//         first = first.next
//         i++
//         // second = second.next
//     }
//     while (first && first.next !== null) {
//         first = first.next
//         second = second.next
//     }
//     // 此时 second 是要删除的节点的前面一个节点

//     second.next = second.next ? second.next.next : null
//     return dummy.next

// };



// 优化一下，dummy为first 不要去判断乱七八糟的极端情况

// var removeNthFromEnd = function(head, n) {
//     var dummy = new ListNode(0)
//     dummy.next = head

//     var first = dummy
//     var second = dummy

//     for (let i = 0; i < n + 1; i++) {
//         first = first.next
//     }
//     console.log(first, "what is first")
//     while (first !== null) {
//         console.log("aaaa")
//         first = first.next
//         second = second.next
//     }
//     second.next = second.next.next
//     return dummy.next
// }



// 遍历两次 第一次求出总长度，然后删除L - n + 1 这个节点
// 最容易想到的

// var removeNthFromEnd = function(head, n) {
//     // 这里和本代码块最后的三元运算符的判断都很烦。。可以通过dummy哑点来化解
//     if (n === 1 && head.next == null) {
//         return null
//     }
//     var totalLength = 0
//     var temp2 = head
//     let first = head
//     while (first !== null) {
//         totalLength++
//         first = first.next
//     }
//     // 删除的节点的位置在 totalLength - n + 1

//     var length = totalLength - n
//     console.log('总长度', totalLength, length)
//     temp = head
//     while (length > 1) {
//         length--
//         temp = temp.next
//     }
//     console.log(temp, "tempp")
//     temp.next = temp.next ? temp.next.next: temp.next
//     return temp2

// }

//首先我们将添加一个哑结点作为辅助，该结点位于列表头部。哑结点用来简化某些极端情况，例如列表中只含有一个结点，或需要删除列表的头部。

var removeNthFromEnd = function(head, n) {
    var dummy = new ListNode(0)
    dummy.next = head
    let length = 0
    var first = head
    while(first != null) {
        length++
        first = first.next
    }
    length = length - n // 这是要删除的节点的前一个节点


    first = dummy
    while (length > 0) {
        length--
        first = first.next
    }
    first.next = first.next.next
    return dummy.next
}


