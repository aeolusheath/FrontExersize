package ds
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

func numSmallerByFrequency(queries []string, words []string) []int {
    // 统计频率，又一次遇到了计数排序，当然这里也可以用map
    var helperGetSmallFrequency = func(str string) int {
        arr := make([]int, 26)
        for i := 0; i < len(str); i++ {
          arr[str[i] - 97]++
        }

        for j:= 0; j < len(arr); j++ {
          if arr[j] != 0 {
            return arr[j]
          }
        }
        return 0
    }


    // 题目限制了，words的长度10
    // 那么下面val最大为10，所以数组长度为11
    // 但是为了下面一个for循环的向前累加，增加一个占位符，所以长度为12
    fr := make([]int, 12)
    for i := 0; i < len(words); i++ {
      val := helperGetSmallFrequency(words[i])
      fr[val]++ // val 最大为10，所以长度为11，但是为了下面数组不越界，直接加一个长度
    }


    for j := 9; j >= 0; j-- {
      fr[j] = fr[j] + fr[j+1]
    }

    ret := make([]int,0)

    for k := 0; k < len(queries); k++ {
      v := helperGetSmallFrequency(queries[k])
      ret = append(ret, fr[v + 1])
    }

    return ret
}


