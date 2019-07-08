/**
 *
 * Design a stack that supports push, pop, top
 * and retrieving the minimum element in constant time.

  push(x) -- Push element x onto stack.
  pop() -- Removes the element on top of the stack.
  top() -- Get the top element.
  getMin() -- Retrieve the minimum element in the stack.
  Example:
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin();   --> Returns -3.
  minStack.pop();
  minStack.top();      --> Returns 0.
  minStack.getMin();   --> Returns -2.
 *
 */

/**
 * initialize your data structure here.
 */

// 错误的解法，求最小值的时候，不是常数项时间复杂度
// var MinStack = function() {
//   this.arr = []
//   this.minIndex = -1
//   this.min = Number.POSITIVE_INFINITY
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//   if (x < this.min) {
//     this.minIndex = 0
//     this.min = x
//   } else {

//   }
//   this.arr.unshift(x)
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//  return this.arr.shift()
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this.arr[0]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   var min = Number.POSITIVE_INFINITY
//   const len = this.arr.length

//   // 二分法？？？ 因为是无序的，所以二分法貌似不行
//   for (let i = 0; i < len; i++) {
//     var cur = this.arr[i]
//     if (cur < min) {
//       min = cur
//     }
//   }
//   return min
// };

// stack 先进后出
var MinStack = function() {
  // 两个 第一个存无序数据 第二个存最小值
  this.arr1 = []
  this.arr2 = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.arr1.unshift(x)
  if (this.arr2.length == 0 || x <= this.arr2[0]) {
    this.arr2.unshift(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var popItem = this.arr1.shift()
  if (popItem == this.arr2[0]) {
    this.arr2.shift()
  }
  return popItem
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr1[0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.arr2[0]
};