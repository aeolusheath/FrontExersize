/**
 * 
  328. Odd Even Linked List

  Given a singly linked list, group all odd nodes together followed by the even nodes. 
  
  Please note here we are talking about the node number and not the value in the nodes.

  You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

  Example 1:

  Input: 1->2->3->4->5->NULL
  Output: 1->3->5->2->4->NULL
  Example 2:

  Input: 2->1->3->5->6->4->7->NULL
  Output: 2->3->6->7->1->5->4->NULL
  Note:

  The relative order inside both the even and odd groups should remain as it was in the input.
  The first node is considered odd, the second node even and so on ...
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
 * @return {ListNode}
 */

  
// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
// 方法一，笨蛋方法 而且空间复杂度为O(n), 时间复杂度为O(n)
var oddEvenList = function(head) {
  let oddNodes = []
  let evenNodes = []
  let node = head
  let i = 0
  while(node) {
    let p = node.next // 1.
    node.next = null // 2.不然堆溢出 自己引用自己循环引用
    if (i % 2 == 0) {
      oddNodes.push(node)
    } else {
      evenNodes.push(node)
    }
    node = p // 3 本来 1，2，3 只有一句： node = node.next
    i++
  }
  let arr = oddNodes.concat(...evenNodes);
  
  // 如果将上面3个有编号的改为 node = node.next
  // 然后执行console.log(JSON.stringify(arr)) 
  // 会报错： Error: converting circular structure to JSON

  for (let i = 0, j = arr.length; i < j - 1; i++) {
    arr[i].next = arr[i+1]
  }
  return arr[0]
};


// 方法二 空间复杂度O(1) 时间复杂度O(n) 但是太绕了，代码看起来一点不简洁 _正确
var oddEvenList = function(head) {
   let node = head, i = 0
   let dummyOdd = new ListNode(null)
   let pOdd = dummyOdd
   let dummyEven = new ListNode(null)
   let pEven = dummyEven
   while(node != null) {
     let temp = node.next // 1，
     node.next = null     // 2
     if (i % 2 ==0) {
      if (!dummyOdd.next) {
        dummyOdd.next = node
      } else {
        pOdd.next = node
      }
      pOdd = pOdd.next
     } else {
       if (!dummyEven.next) {
         dummyEven.next = node;
       } else {
         pEven.next = node
       }
       pEven = pEven.next
     }
     node = temp // 3  有编号的3个步骤（1，2，3），本来只有一步，就是 node = node.next ，但是这句代码会引起循环引用，造成堆内存溢出
     i++
   }
   pOdd.next = dummyEven.next;
   return dummyOdd.next
}

// 方法三-1 去掉dummy
var oddEvenList = function(head) {
  if (!head) return null
  let node = head, i = 0;
  let pOdd = null
  let pEven = null
  let pEvenHead = null 
  
  while(node != null) {
    // let temp = node.next // 1
    // node.next = null // 2
    if (i % 2 == 0) {
      if (pOdd == null) {
        pOdd = node
      } else {
        pOdd.next = node
        pOdd = pOdd.next
      }
    } else {
      if (pEven == null) {
        pEven = node
        pEvenHead = pEven // 保存 偶数项的头指针
      } else {
        pEven.next = node
        pEven = pEven.next
      }
    }
    // node.next = temp // 3
    node = node.next 
    i++
    if(i == 1) {
      console.log(pOdd.val, node.val)
    }
  }
  // head -> 1 -> 3 -> 5[pOdd]
  // pEvenHead -> 2 -> 4[pEven]
  // 直接pOdd.next  = pEvenHead会循环引用，因为4 现在还是指向 5的， 
  if (pEven != null) {
    pEven.next = null
  }
  pOdd.next = pEvenHead
  return head
}

// 方法三-2 
var oddEvenList = function(head) {
  if (!head) return null
  let node = head, i = 0;
  let pOdd = null
  let pEven = null
  let pEvenHead = null 
  
  while(node != null) {
    let temp = node.next // 1
    node.next = null // 2
    if (i % 2 == 0) {
      if (pOdd == null) {
        pOdd = node
      } else {
        pOdd.next = node
        pOdd = pOdd.next
      }
    } else {
      if (pEven == null) {
        pEven = node
        pEvenHead = pEven // 保存 偶数项的头指针
      } else {
        pEven.next = node
        pEven = pEven.next
      }
    }
    node.next = temp // 3
    // node = node.next   // 1,2,3合并成这一句，防止循环应用
    i++

  }
  pOdd.next = pEvenHead
  return head
}





// 方法四 官方解法，so coooool_正确
var oddEvenList = function(head) {
  if (head == null) return null
  let odd = head;
  let evenHead = odd.next; // 头指针，最后需要赋值给 odd的尾指针
  let even = evenHead
  // odd 和 even其中有一个为空那么就结束
  while(odd.next != null && even.next != null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}








