/**
 * 
 * 
 * We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.

  Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.

  Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).

  Note that in the example inputs (not outputs) below, arrays such as [2,1,5] represent the serialization of a linked list with a head node value of 2, second node value of 1, and third node value of 5.

  

  Example 1:

  Input: [2,1,5]
  Output: [5,5,0]
  Example 2:

  Input: [2,7,4,3,5]
  Output: [7,0,5,5,0]
  Example 3:

  Input: [1,7,5,1,9,2,5,1]
  Output: [7,9,9,9,0,5,0,0]
  

  Note:

  1 <= node.val <= 10^9 for each node in the linked list.
  The given list has length in the range [0, 10000].
 * 
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
 * @return {number[]}
 */

 // 这种多种情况中满足一种情况的case，想到栈 stack 

// 暴力方法 不可取
var nextLargerNodes = function(head) {
  let allValues = []  
  while(head) {
    allValues.push(head.val)
    head = head.next
  }
  // 求出了所有的数据
  for (let i = 0, j = allValues.length; i < j; i++) {
    let hasLarger = false
    for (let k = i+1; k < j; k++) {
      if (allValues[k] > allValues[i]) {
        hasLarger = true
        allValues[i] = allValues[k]
        break
      }
    }
    if (!hasLarger) {
      allValues[i] = 0
    }
  }
  return allValues
};

// 用一个栈存储索引，如果存在大于的就设置值？
var nextLargerNodes = function(head) {
  let arr = []  
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  let stack = []
  let ret
  for (let i = 0, len = arr.length; i<len; i++) {
    // 比如 5,4,3,6 这种情况，用暴力法就会浪费很多时间
    while(stack.length && arr[stack[stack.length - 1] < arr[i]]) {
      ret[stack.pop()] = arr[i]
    }
    stack.push(i)
  }
  while(stack.length) {
    ret[stack.pop()] = 0
  }
}


// 或者用一个map存储索引
var nextLargerNodes = function(head) {
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  let map = new Map()
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length-1] < arr[i]]) {
      map.set(stack.pop(), arr[i])
    }
    stack.push(i)
  }
  let ret = []
  for (let p = 0; p < arr.length; i++) {
    if (map.has(p)) {
      ret[p] = map.get(p)
    } else {
      ret[p] = 0
    }
  }
  return ret
}
