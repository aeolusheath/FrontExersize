/**
 * 
 * 
 * 
  Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s. 
  
  For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.

  Now, given string arrays queries and words, return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

 

  Example 1:

  Input: queries = ["cbd"], words = ["zaaaz"]
  Output: [1]
  Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").
  Example 2:

  Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
  Output: [1,2]
  Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").
 
 
 
  1 <= queries.length <= 2000
  1 <= words.length <= 2000
  1 <= queries[i].length, words[i].length <= 10
  queries[i][j], words[i][j] 都是小写英文字母


 
  * 
 * 
 */

 // 方法一 暴力法 算出所有f(w)值，然后遍历 m*n 略


 // 方法二 时间复杂度O(n)
var numSmallerByFrequency = function(queries, words) {

  // 用计数排序（桶排序）找到字符串中最小的字母的出现频率
  var helperGetSmallFrequency = (str) => {
    // 字母可以转换为字节整数 
    let arr = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      arr[str.charCodeAt(i) - 97]++
    }
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]!==0) {
        // return String.fromCharCode(arr[i] + 97)
        return arr[i]
      }
    }
    return 0
  }

  // 记录 words数组中，f()函数值的结果 - 出现的频率
  let fr = new Array(12).fill(0); // 为什么12，因为words数组的元素最多10个字符，返回10，
  for (let i = 0; i < words.length; i++) {
    let val = helperGetSmallFrequency(words[i]) // val的最大值是10，那么fr的长度应该 >= 11
    fr[val]++
  }

  // 9 = 9 + 10
  // 8 = 8 + 9
  // 记录出现的频率 大于 等于这个值的总和，比如queries[0]的f()结果为8，那么只需要取fr[9]即可，后面的已经累加了，9和10的结果已经有了
  // fr在当前的条件下，索引值最大为10
  for (let i = 9; i>=0; i--) {
    fr[i] = fr[i] + fr[i+1]
  }

  // 到这一步，结果数组里面的数据 >= number 的值，已经全部存在 fr[number]的位置上了，number最大值为10
  let ret = []
  for (let i = 0; i <queries.length; i++) {
      let val = helperGetSmallFrequency(queries[i])
      // val 可能为10，那么fr[11]一定得存在，那么这个数组长度为12
      ret.push(fr[val+1])
  }
  return ret
  

  /**
   * 
   * 
   * 这个题的关键： 
   *  1，找到最小的smallest的字母的出现频率，这个根据字母的字节数 与 97 的关系 通过计数（桶）排序，可以找到这个结果，本质上字母还是数字
   *  2，将这个频率值，存入0-10的一个索引数组中，因为这个f()函数值的结果是1-10，没有的计为0
   *  3，然后在queries里面，求出每一个结果值，然后每一个结果值 - fr数组里面有对应的words频率大小
   * 
   */
};

console.log(numSmallerByFrequency(["bbb","cc"],["a","aa","aaa","aaaa"]))