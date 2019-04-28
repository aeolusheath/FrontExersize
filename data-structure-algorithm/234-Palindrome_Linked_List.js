/**

 Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 方法一
var isPalindrome = function(head) {
    if (head == null || head.next == null)
        return true

    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }

//     if (arr.length % 2 !==0)
//         return false

    for(let i = 0,j= arr.length -1;i<arr.length, j>=0; i++, j-- ) {
        if(arr[i]!==arr[j])
            return false
    }
    return true
};


// method 2
// 遍历链表，将每一个放到一个stack 栈里面
// 然后重新遍历链表，将每一个与stack栈顶比较，若相等则移除栈顶元素，不等则返回false
// 最后返回false


// Could you do it in O(n) time and O(1) space?

// method 3  错误了 [2,22]
// 巧妙解法，但是这种只适用于链表的值是一个字符串，而不能是其他的类型
var isPalindrome = function (head) {
  let str = ''
  let reverseStr = ''
  while (head) {
    str = str + head.val
    reverseStr = head.val + reverseStr
    head = head.next
  }
  return str === reverseStr
}

// method4
// 1, 找到中间节点
// 2, 翻转 后半部分节点
// 3, 比较两半部门节点

var isPalindrome = function (head) {
  if (head == null || head.next == null) {
    return true
  }
  // 1,找到中间节点
  let slow = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  slow = slow.next

  // 2,翻转后半部分节点
  slow = reverseLinkedList(slow)
  while (slow) {
    if (slow.val !== head.val) {
      return false
    }
    head = head.next
    slow = slow.next
  }
  return true
}

function reverseLinkedList(head) {
  let prev = null
  while (head) {
    let tempNode = head.next
    head.next = prev
    prev = head
    head = tempNode
  }
  return prev
}