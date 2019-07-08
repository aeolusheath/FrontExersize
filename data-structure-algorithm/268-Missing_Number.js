/**
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

    Example 1:

    Input: [3,0,1]
    Output: 2
    Example 2:

           [0,9]
    Input: [9,6,4,2,3,5,7,0,1]
    Output: 8
    Note:
    Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 *
 *
 *
 */

var missingNumber = function(nums) {
  let total = 0
  for (let i = 0; i < nums.length + 1; i++) {
    total = total + i - (nums[i] || 0)
  }
  return total
};

// method2 异或运算

var missingNumber2 = function (nums) {
  var result = 0
  for (let i = 0; i < nums.length + 1; i++) {
    result = result ^ i ^ (nums[i] || 0 )
  }
  return result
}


// 删除单链表中的某一个节点，并且返回该单链表
function Node(num, nextNode){
  this.num = num
  this.next = nextNode
}

var num = 2,
  node1 = new Node(1),
  node2 = new Node(2),
  node3 = new Node(3);

node1.next = node2
node2.next = node3

function removeNodeFive(num, node) {
  var head = new Node(-1)
  head.next = node
  var n = head
  // while (n.val != undefined) {
  //   if (n.num === num) {
  //     n.num = n.next.val
  //     n.next = n.next.next
  //     break
  //   }
  //   n = n.next
  // }
  while (n.next != undefined) {
    if (n.next.num === num) {
      if (n.next.next != undefined) {
        n.next = n.next.next
        n.num = n.next.num
      } else {
        n.next = undefined
      }
      break;
    }
    n = n.next
  }
  console.log(head.next)
  return head.next
}

removeNodeFive()