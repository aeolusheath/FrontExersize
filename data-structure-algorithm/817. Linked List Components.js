/**
 * 
  We are given head, the head node of a linked list containing unique integer values.

  We are also given the list G, a subset of the values in the linked list.

  Return the number of connected components in G, where two values are connected if they appear consecutively in the linked list.

  Example 1:

  Input: 
  head: 0->1->2->3
  G = [0, 1, 3]
  Output: 2
  Explanation: 
  0 and 1 are connected, so [0, 1] and [3] are the two connected components.
  Example 2:

  Input: 
  head: 0->1->2->3->4
  G = [0, 3, 1, 4]
  Output: 2
  Explanation: 
  0 and 1 are connected, 3 and 4 are connected, so [0, 1] and [3, 4] are the two connected components.
  Note:

  If N is the length of the linked list given by head, 1 <= N <= 10000.
  The value of each node in the linked list will be in the range [0, N - 1].
  1 <= G.length <= 10000.
  G is a subset of all values in the linked list.
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
 * @param {number[]} G
 * @return {number}
 */

 // G中的元素 是否在 head的链表中 连续，单独存在也是连续
var numComponents = function(head, G) {
  let map = new Map()
  for (let i of G) {
    map.set(i, true)
  }
  let node = head
  let prev = false
  let count = 0
  while (node != null) {
    let val = node.val
    if (map.has(val) && prev == false) {
      count++
      prev = true
    } 
    if (!map.has(val)) {
      prev = false
    }
    node = node.next
  }
  return count
};


// 用set存储,就用数组也可以，和以前的方法一样，不太好
var numComponents = function(head, G) {
  let set = new Set(G)
  let flag = false
  let node = head
  let id = 0
  while(node) {
    if (set.has(node.val) && flag == false){
      flag = true
      id++
    }
    if (!set.has(node.val)) {
      flag = false
    }
    node = node.next
  }
  return id


// 为啥行不通
//  while(head && head.next) {
//   const val = head.val
//   if (set.has(val)) {
//     idx++
//   }

//   while(set.has(head.next.val)) {
//     head = head.next
//   }
//   // head = head.next

// 没有走下去的原因，while代码块 和  下面的head = head.next代码块是互斥的
// 没有找到解决办法，可以用一个标记flag去做
}


// 用官方的方法，就根据题意来
// 如果下一个不在G里面，那么i++
var numComponents = function(head, G) {
  let node = head
  let count = 0
  let set = new Set(G)

  while (node) {
   if(set.has(node.val) && 
      (node.next == null || set.has(node.next.vala))) 
   {
    count++
   }
   node = node.next
  }
  return count
}
