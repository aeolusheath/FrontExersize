package ds


/**
 * 
  
  Given an array consisting of n integers, 
  
  find the contiguous subarray of given length k that has the maximum average value. 
  
  And you need to output the maximum average value.

  Example 1:

  Input: [1,12,-5,-6,50,3], k = 4
  Output: 12.75
  Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
  

  Note:

  1 <= k <= n <= 30,000.
  Elements of the given array will be in the range [-10,000, 10,000].

 * 
 * 
 * 
 */


 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力法 
// 找到所有的子数组，然后求平均值 略

// 求出每k个数字的总和

// [1,12,-5,-6,50,3]
func findMaxAverage(nums []int, k int) float64 {
    length := len(nums)
    sums := make([]float64, length)
    sums[0] = float64(nums[0])
    for i := 1; i < length; i++ {
     sums[i] += sums[i - 1] + float64(nums[i])
    }

    // 然后求出所有连续K个数字的和
    avg := sums[k - 1]/float64(k)
    // j :=1 是错的，why
    for j:= 1; j < length - k; j++ {
        newAvg :=(sums[j+k] - sums[j]) / float64(k)
        avg = getMax(avg, newAvg)
    }
    return avg
}
func getMax(a, b float64) float64{
    if a >= b {
        return a
    } else {
        return b
    }
}

// slide window
