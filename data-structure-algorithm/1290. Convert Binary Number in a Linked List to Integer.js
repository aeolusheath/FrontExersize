/***
 * 
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

    Return the decimal value of the number in the linked list.

    

    Example 1:


    Input: head = [1,0,1]
    Output: 5
    Explanation: (101) in base 2 = (5) in base 10
    Example 2:

    Input: head = [0]
    Output: 0
    Example 3:

    Input: head = [1]
    Output: 1
    Example 4:

    Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
    Output: 18880
    Example 5:

    Input: head = [0,0]
    Output: 0
    

    Constraints:

    The Linked List is not empty.
    Number of nodes will not exceed 30.
    Each node's value is either 0 or 1.
 * 
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
 * @return {number}
 */
// 方法一
var getDecimalValue = function(head) {
  let arr = [] 
  let p = head
  while(p != null) {
      arr.unshift(p.val)
      p = p.next
  }
  let result = 0
  for (let i = 0, j = arr.length; i < j; i++) {
      result = result + arr[i] * (2**i)
  }
  return result
};

// 方法二

var getDecimalValue = function(head) {
  let p = head
  let str = ''
  while(p != null) {
    str += p.val
    p = p.next
  }
  return parseInt(str, 2)
};