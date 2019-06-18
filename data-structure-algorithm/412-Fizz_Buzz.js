/**
 *
 *  Write a program that outputs the string representation of numbers from 1 to n.

    But for multiples of three it should output “Fizz”
    instead of the number and for the multiples of five output “Buzz”.
    For numbers which are multiples of both three and five output “FizzBuzz”.
 *
 *
 */

// n >=1
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz2 = function(n) {

};

var fizzBuzz = function(n) {
  var is3 = function (i) {
    return i % 3 == 0 && i % 5 !== 0
  }
  var is5 = function (i) {
    return i % 5 == 0 && i % 3 !== 0
  }

  var is15 = function (i) {
    return i % 15 === 0
  }

  var ret = []
  for (let i = 1; i <= n; i++) {
    var s = ""
    if (is3(i)) {
      s = "Fizz"
    } else if (is5(i)) {
      s = "Buzz"
    } else if (is15(i)) {
      s = "FizzBuzz"
    } else {
      s = i+""
    }
    ret.push(s)
  }
  return ret
};