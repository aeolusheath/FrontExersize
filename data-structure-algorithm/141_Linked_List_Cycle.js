/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 *
 *
 * 输入：head = [3,2,0,-4], pos = 1
   输出：true
 *
 */

// 双指针 ，how to do it

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head == null || head.next ==null) {
        return false
    }
    var map = new Map()
    while(head) {
        if(map.get(head) !== undefined){
            console.log(head)
            return true
        }
        map.set(head, 1)
        head = head.next
    }
    return false
};

// 给它一个标记, cool
var hasCycle = function(head) {
    if(head === null) return false;
    let current = head;
    while(current !== null) {
        if(current.flag) {
            return true;
        }
        current.flag = true;
        current = current.next;
    }

    return false;

};


// 双指针
var hasCycle = function(head) {
    let step1 = head;
    let step2 = head;
    while( step2 != null && step2.next != null ) {
        step1 = step1.next;
        step2 = step2.next.next;
        if( step1 == step2 ) return true;
    }

    return false;
};