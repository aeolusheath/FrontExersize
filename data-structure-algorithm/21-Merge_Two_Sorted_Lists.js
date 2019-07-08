/**
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 错误错误
var mergeTwoListsWrong = function (l1, l2) {
  if(!l1 || !l2) return l1 || l2
  var dummy = new ListNode(0)
  dummy.next = l1.val <= l2.val ? l1 : l2
  // 这里没有用第三个变量，会导致 l1 和 l2会丢失某一个node的引用，和最后一个方法对比
  while (l1 !=null && l2 !==null) {
    let temp
    if (l1.val <= l2.val) {
      temp = l1.next
      l1.next = l2
      l2 = temp

      l1 = l1.next
    } else {
      temp = l2.next
      l2.next = l1
      l1 = temp

      l2 = l2.next
    }

    // if (l2) {

    // }

  }
  return dummy.next
};


// 方法一 递归
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  let head = null
  if (l1.val <= l2.val) {
    head = l1
    l1.next = mergeTwoLists(l1.next, l2)
  } else {
    head = l2
    l2.next = mergeTwoLists(l2.next, l1)
  }
  return head
}

// 方法二 指针，必须要用一个第三方变量pointer 存储，不然会丢失引用 【对比第一种方法】
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2
  var head = new ListNode(0)
  let pointer = head

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      pointer.next = l1
      l1 = l1.next
    } else {
      pointer.next = l2
      l2 = l2.next
    }
    pointer = pointer.next
  }

  if (l2) {
    pointer.next = l2
  }
  if (l1) {
    pointer.next = l1
  }
  return head.next
} 