/**
 *
 *  Given two arrays, write a function to compute their intersection.

    Example 1:

    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]
    Example 2:

    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [4,9]
    Note:

    Each element in the result should appear as many times as it shows in both arrays.
    The result can be in any order.
    Follow up:

    What if the given array is already sorted? How would you optimize your algorithm?
    What if nums1's size is small compared to nums2's size? Which algorithm is better?
    What if elements of nums2 are stored on disk,
    and the memory is limited such that you cannot load all elements into the memory at once?
 *
 *
 */

var intersect = function(nums1, nums2) {
    const map = {}
    const ret = []
    for (let i = 0; i < nums1.length; i++) {
        const val = nums1[i]
        if(!map[val])
            map[val] = 1
        else
            map[val] = map[val] + 1
    }
    for (let j of nums2) {
        if(map[j] && map[j]!==0) {
            ret.push(j)
            map[j] = map[j] - 1
        }
    }
    return ret
};


var intersect = function(nums1,nums2) {
    let arr = []
    for (let i of nums1) {
        if (nums2.indexOf(i) !== -1) {
            // 去掉nums2中当前这个值 
            nums2.splice(nums2.indexOf(i), 1)
            arr.push(i)
        }
    }
    return arr
}