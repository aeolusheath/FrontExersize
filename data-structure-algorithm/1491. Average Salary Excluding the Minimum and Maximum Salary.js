/**
 * 
  Given an array of unique integers salary where salary[i] is the salary of the employee i.

  Return the average salary of employees excluding the minimum and maximum salary.

  

  Example 1:

  Input: salary = [4000,3000,1000,2000]
  Output: 2500.00000
  Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
  Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500
  Example 2:

  Input: salary = [1000,2000,3000]
  Output: 2000.00000
  Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
  Average salary excluding minimum and maximum salary is (2000)/1= 2000
  Example 3:

  Input: salary = [6000,5000,4000,3000,2000,1000]
  Output: 3500.00000
  Example 4:

  Input: salary = [8000,9000,2000,3000,6000,1000]
  Output: 4750.00000
  

  Constraints:

  3 <= salary.length <= 100
  10^3 <= salary[i] <= 10^6
  salary[i] is unique.
  Answers within 10^-5 of the actual value will be accepted as correct.

 * 
 * 
 */

 /**
 * @param {number[]} salary
 * @return {number}
 */
// 方法一，直接排序, 求出最大值和最小值
// 时间复杂度O(nlogn)  空间复杂度O(1) 略



// 方法二，线性扫描，求出最大值和最小值，然后求平均
// 线性扫描能以O(n)的时间复杂度求出最大最小，前几大，前几小
var average = function(salary) {
    let max = Number.NEGATIVE_INFINITY
    let min = Number.POSITIVE_INFINITY
    let len = salary.length;
    for (let i = 0; i < len; i++) {
      if (salary[i] > max) {
        max = salary[i]
      }
      if (salary[i] < min) {
        min = salary[i]    
      }
    }
    let total = 0
    for (let j = 0; j < len; j++) {
      if (salary[j]!== min && salary[j] !== max) {
        total += salary[j]
      }
    }

    return total / (len - 2)
};


// 方法三 ，更加优化，一次循环将所有的总和先给求出来，最后再减去即可，就不用走第二次循环
// 时间复杂度O(n) 
var average = function(salary) {
  let max = Number.NEGATIVE_INFINITY
  let min = Number.POSITIVE_INFINITY
  let len = salary.length;
  let sum = 0
  for (let i = 0; i < len; i++) {
    if (salary[i] > max) {
      max = salary[i]
    }
    if (salary[i] < min) {
      min = salary[i]    
    }
    sum += salary[i]
  }
  return (sum  - max - min) / (len - 2)
};



// 方法四，利用JS的特定方法
var average = function(salary) {
  let salary = salary.sort((a, b) => a - b)
  salary.pop()
  salary.shift()

  let totoal = salary.reduce((total, num) => total + num, 0)
  return total / (salary.length - 2)
}

console.log(average([4000,3000,1000,2000]))
console.log(average([6000,5000,4000,3000,2000,1000]))