/**
 *
    Write a function that reverses a string. The input string is given as an array of characters char[].

    Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

    You may assume all the characters consist of printable ascii characters.



    Example 1:

    Input: ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]
    Example 2:

    Input: ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]
 *
 */


// tag: 双指针

var reverseString = function(s) {
    var temp

    for(let i = 0, j = s.length - 1; i < s.length, j >= i; i++, j--) {
        const temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }

    return s
};


// 扁平化一个数组
function flatternArr(arr, retArr = []) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flatternArr(item, retArr)
    } else {
      retArr.push(item)
    }
  })
  return  retArr
}