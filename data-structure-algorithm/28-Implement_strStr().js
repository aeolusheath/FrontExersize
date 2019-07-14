/**
 *
 *
 *  Implement strStr().

    Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

    Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2

    Example 2:
    Input: haystack = "aaaaa", needle = "bba"
    Output: -1

    Clarification:
    What should we return when needle is an empty string? This is a great question to ask during an interview.
    For the purpose of this problem, we will return 0 when needle is an empty string.
    This is consistent to C's strstr() and Java's indexOf().

 *
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// tip：two pointers 、 双指针
// haystack = "hello", needle = "ll"
// 暴力匹配法 写错了
var strStr = function (haystack, needle) {
  if (haystack == needle) {
    return 0
  }
  let start; // in haystack
  let k = 0
  for (let i = 0; i < haystack.length; i++) {
    // if (start == needle.length - 1) {
    //   break
    // }
    // console.log("k--> ", k, "i-->", i)
    if (start !== undefined && k <= needle.length - 1 ) {
      // start = haystack[i] !== needle[k++] ? undefined : (start + 1)
      // if (haystack[i] == needle[k++]) {
      // } else {
      //   start = undefined
      //   k = 0
      // }
      console.log("这里的k", k, "这里的i", i)
      if (haystack[i] !== needle[k++]) {
        start = undefined
        k = 0
      }
      // console.log("k-----0-0-0-0-", k)
    }
    if (haystack[i] == needle[0] && start == undefined) {
      start = i
      k++
    }
    // console.log(start, "start===")
    // console.log('')
    console.log("k--> ", k, "i-->", i, "start-->", start)
    console.log('')
  }
  // console.log(start, "-------------")
  // console.log(start === undefined)
  console.log(start === undefined ? -1 : start)
  return (start === undefined ? -1 : start)
};

// strStr("hello", "eo")

// 暴力匹配法
// 将needle在haystack上面移动
// 双指针
var strStr2 = function (haystack, needle) {
  let i = 0;
  let j = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] == needle[j]) {
      i++
      j++
    } else {
      i = i - j + 1 //  如果不相等  i回溯到needle首字母移动到haystack的初始的i之 / j变为0
      j = 0
    }
  }
  if (j == needle.length) {
    return i - j
  }
  else {
    return - 1
  }
}

console.log(strStr2("hello", "hel"))

// kmp https://blog.csdn.net/v_july_v/article/details/7041827

var strStr3 = function (haystack, needle) {
  let count = haystack.length - needle.length
  if (count == 0 &&  haystack == needle ) {
    return 0
  }
  if (count < 0) {
    return -1
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let temp = haystack.substr(i, needle.length) 
    if (temp == needle)
      return i
  }
  return -1
}




