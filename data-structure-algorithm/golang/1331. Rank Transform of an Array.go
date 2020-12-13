package ds

import "sort"

/**
 * 
 * 
 * 
 * 
 *  Given an array of integers arr, replace each element with its rank.

    The rank represents how large the element is. The rank has the following rules:

    Rank is an integer starting from 1.
    The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
    Rank should be as small as possible.
    

    Example 1:

    Input: arr = [40,10,20,30]
    Output: [4,1,2,3]
    Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
    Example 2:

    Input: arr = [100,100,100]
    Output: [1,1,1]
    Explanation: Same elements share the same rank.
    Example 3:

    Input: arr = [37,12,28,9,100,56,80,5,12]
    Output: [5,3,4,2,8,6,7,1,3]
    

    Constraints:

    0 <= arr.length <= 105
    -109 <= arr[i] <= 109
 * 
 * 
 * 
 */

 /**
 * @param {number[]} arr
 * @return {number[]}
 */
// 时间复杂度O(nlogn) 空间复杂度O(n)
// 优化，排序可以用count sort 计数排序 因为这里限定了数组的长度 和 元素的大小

func arrayRankTransform(arr []int) [] int{
    if len(arr) == 0 {
        return arr
    }
    newArr := make([]int, len(arr))
    // 复制slice；复制切片，值复制，新的数据不会影响老数据
    copy(newArr, arr)
    sort.Ints(newArr)

    var j = 1//  双指针的思想
    var mp = make(map[int]int)
    mp[newArr[0]] = 1
    for i:=1; i < len(newArr); i++ {
        if newArr[i] != newArr[i - 1] {
           mp[newArr[i]] = j + 1
           j++
        }
    }
    for j:=0; j < len(arr); j++ {
        //val, _ = map[arr[j]]
        arr[j] = mp[arr[j]]
    }
    return arr
}


