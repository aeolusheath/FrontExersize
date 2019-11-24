/**
 * 
 * 
 * Remove all elements from a linked list of integers that have value val.
    Example:
    Input:  1->2->6->3->4->5->6, val = 6
    Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null) return null
    while (head != null && head.val == val) {
      head = head.next;
    }    
    if (head == null) return head
    let node = head
    while(node.next != null) {
      if (node.next.val == val) {
        node.next = node.next.next
      } else {
        node = node.next
      }
      // node = node.next 
    }
    return head
};


// concise and much better
var removeElements = function(head, val) {
  let header = new ListNode(0)
  header.next = head

  let prev = header
  // while(head) {
  //   if (head.val == val) {
  //     prev.next = head.next
  //   } else {
  //     prev = head
  //   }
  //   head = head.next
  // }
  while(head) {
    let nextNode = head.next
    if (head.val == val) {
      prev.next = nextNode
    } else {
      prev = head
    }
    head = nextNode
  }
  return header.next
}

// my own wrong answer
var removeElements = function(head, val) {
  // let pre = new ListNode()
  // pre.next = head
  // let node = head
  // let next = node.next    
  // 错误版本一
  // while (node != null) {
  //   if (node.val === val) {
  //     node.val = node.next ? node.next.val : null
  //     node.next = node.next ? node.next.next : null
  //   }
  //   node = node.next
  // }
  // 错误版本二 没有处理尾部的问题?头部好像没啥问题
  // while (node != null) {
  //   if (node.val === val && node.next != null) {
  //       node.val = node.next.val
  //       node.next = node.next.next
  //   }
  //   node = node.next
  // }
  // return pre.next
};

