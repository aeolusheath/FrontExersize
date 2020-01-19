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


// 2020-01-10 分割线--------------------------------
// BF 暴力分解法

var strStrIndex = function (haystack, needle) {
  let i = 1; j = 1;
  while (i <= haystack.length && j <= needle.length) {
    // index从1 开始，这里是错的 
    if (haystack[i] == needle[j]) {
      i++
      j++
    } else {
      i = i - j + 2 // i 的下一位
      j = 1
    }
  }
  if (j > needle.length) 
    // return i - j  WRONG
    return i - needle.length
  return -1
}

// 0 1 2 3 5 1 2 4        i = 3 j = 2
//   1 2 4



// kmp 算法
function getPrefixTable (pattern) {
  
  let prefix = []
  prefix[0] = 0
  let len = 0; // 最大前后缀的相等的数目 【包含当前字母的字符串的最大相等前后缀的长度】
  let i = 1; // i 从pattern的第二个字母开始比较，为什么，因为第一个字母比较不相等j不需要回溯，i和j都往后移动一个即可。
  while (i < pattern.length) {
    // if 

    /**
     *  https://www.youtube.com/watch?v=3IFxpozBs2I  7:59s
     *  ABABCA [这个字符] 的prefix值是啥，这个字符前面的最大重复前后缀为1 len = 1
     *  如果这个字符 等于 pattern[1] 那么必然有两个相同的前后缀
     *  所以每个位置的相同的前后缀是和前面一个字符的相同最大前后缀长度相关联的 
     * 
     */
    // if (i==8) {
    //   console.log(len)
    // }
    if (pattern[i] == pattern[len]) {
      len++
      prefix[i] = len
      i++;
      console.log('1111111')
    } else {
      // len 可能等于 -1 
      // WRONG
      // len = prefix[len - 1]

      if (len > 0) {
      console.log('22222222')

        len = prefix[len - 1]
      } else {
        //  let t = 'ABABCABAA' i = 1 ; len = 0  程序进入的时候就死循环
        // 所以
      console.log('3333333')
        prefix[i] = len 
        i++;
        // prefix[i] = 0 都可以
      }
    }
  }
  console.log(prefix)
  return  moveTable(prefix)
}


function moveTable(prefix) {
  let j = prefix.length;
  for (let i = j - 1; i > 0; i--) {
    prefix[i] = prefix[i - 1]
  }
  prefix[0] = -1
}

let t = 'ABABCABAA'
let next = getPrefixTable(t)