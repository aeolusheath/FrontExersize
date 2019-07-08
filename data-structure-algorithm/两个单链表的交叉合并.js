/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode(val) {
   this.val = val
   this.next = null
 }

 var l1 = new ListNode(1)
 l1.next = new ListNode(2)
 l1.next.next = new ListNode(4)

 var l2 = new ListNode(1)
 l2.next = new ListNode(3)
 l2.next.next = new ListNode(4)

//  var mergeTwoLists = function(A, C) {    
//   if (!A || !C) return A || C

//   let rest = null
//   if (!A.next) { A.next = C; return A  } 
//   while (A.next && C) {
//       rest = A.next
//       A.next = C
//       console.log(rest)
//       mergeTwoLists(A.next, rest)
//   }
//   return A 
// };

// 递归

var mergeTwoLists = function (l1, l2) {
  console.log('-------\n\n')
  if (!l1 || !l2) return l1 || l2
  
  let head = null
  if (l1.val <= l2.val) {
    console.log('head is l1, value is', l1.val)
    head = l1
    head.next = mergeTwoLists(l1.next, l2)
  } else {
    console.log('head is l2, value is', l2.val)    
    head = l2
    head.next = mergeTwoLists(l1, l2.next)
  }
  console.log('-------\n\n')
  return head
}

// 迭代

var mergeTwoLists2 = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2
  let head = new ListNode(null)
  let pointer = head
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pointer.next = l1
      l1 = l1.next
    } else {
      pointer.next = l2
      l2 = l2.next
    }
    pointer = pointer.next
  }
  if(l1) {
    pointer.next = l1
  } 
  if(l2) {
    pointer.next = l2
  }
  return head.next; 
}