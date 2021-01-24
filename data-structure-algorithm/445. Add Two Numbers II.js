/**
 * 
 * 
 * 
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

 * 
 */





var addTwoNumbers = function(l1, l2) {
  const s1 = []
  const s2 = []
  let node1 = l1
  let node2 = l2
  while (node1) {
      s1.push(node1.val)
      node1 = node1.next
  }
  while (node2) {
      s2.push(node2.val)
      node2 = node2.next
  }

  // 现在数字都在stack，每次弹出来
  // 改进1: 下面3个while循环 可以合并为1个，因为每次如果s1 或者s2为空的时候，那时候放置为0即可
  // 改进2： 可以每次指针往前移动
  let r = 0
  let res = []
  while (s1.length > 0 && s2.length > 0) {
      let v1 = s1.pop()
      let v2 = s2.pop()

      let remain = (v1 + v2 +r) % 10
 
      if ((v1 + v2 + r) >= 10 ) {
          res.unshift(remain)
      } else {
          res.unshift(v1 + v2 + r)
      }

      r = Math.floor((v1 + v2 + r) / 10)
  }    
  while (s1.length > 0) {
      let v1 = s1.pop()
      let remain = (v1 +r) % 10
      if ((v1 + r) >= 10 ) {
          res.unshift(remain)
      } else {
          res.unshift(v1 + r)
      }
      r = Math.floor((v1 + r) / 10) 
  }

  while (s2.length > 0) {
      let v2 = s2.pop()     
      let remain = (v2 +r) % 10
      if ((v2 + r) >= 10 ) {
          res.unshift(remain)
      } else {
          res.unshift(v2 + r)
      }
      r = Math.floor((v2 + r) / 10) 
  }

  if (r > 0) {
      res.unshift(r)
  }

  let head = new ListNode(res[0])
  let dummy = head
  for (let i = 1; i < res.length; i++) {
      head.next = new ListNode(res[i])
      head = head.next
  }
  return dummy

}


// 注意对比上面，将3个 while 合并为一个，并且可以将最后一次构建List给优化
var addTwoNumbers = function(l1, l2) {
  const s1 = []
  const s2 = []
  let node1 = l1
  let node2 = l2
  while (node1) {
      s1.push(node1.val)
      node1 = node1.next
  }
  while (node2) {
      s2.push(node2.val)
      node2 = node2.next
  }

  // 现在数字都在stack，每次弹出来
  // 改进1: 下面3个while循环 可以合并为1个，因为每次如果s1 或者s2为空的时候，那时候放置为0即可
  // 改进2： 可以每次指针往前移动
  let r = 0
  let node = null
  while (s1.length != 0 || s2.length != 0 || r != 0) {
      let v1 = s1.length > 0 ? s1.pop() : 0
      let v2 = s2.length > 0 ? s2.pop() : 0
      let remain = (v1 + v2 +r ) % 10
      r = Math.floor((v1 + v2 + r) / 10)
      // 基础知识，对一个数组，逆序构造一个LIST， 顺序构造一个LIST如何构造，请熟悉
      let cur = new ListNode(remain)
      cur.next = node
      node = cur
      // remain 为当前node上的val
  }    

  return node

}



// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }


// function x(arr) {
//   let dummy = new ListNode(0)
//   let node = dummy

//   for (let i = 0; i < arr.length; i++) {
//       let cur = new ListNode(arr[i])
//       node.next =cur
//       node = node.next
//   }
//   console.log(JSON.stringify(dummy.next))
//   return dummy.next
// }

// x([2,3,4,7])

// function xN(arr) {

//   let node = null
//   for (let i = arr.length - 1; i >= 0; i--) {
//       let cur = new ListNode(arr[i])
//       cur.next = node
//       node = cur
//   }
//   console.log(JSON.stringify(node))
//   return node
// }

// xN([2,3,4,7])