/**
 * @param {string} s
 * @return {number}
 */
// method 1 by my self
// 如果前面的字符有重复的，那么str重新赋值为去掉重复的字符串
// 可以改进求出所有未重复的字符串
var lengthOfLongestSubstring = function(s) {
    const length = s.length
    if(length === 0 || length === 1)
        return length
    var str = ''
    // const arr = []
    var max = 0
    for (let i = 0; i < length; i++) {
        if(!str.includes(s[i])) {
            str = str + s[i]
            // arr.push(str)
            max = Math.max(max, str.length)
        } else {
            //找到前面一个重复之后的字符
            const repeatIndex = str.indexOf(s[i])
            str = str.substr(repeatIndex+1) + s[i]
        }
    }
    return max
};

// method 2
// js 最高效的方法
// 记录未重复的点为start 如果某一个字符s[i]，
var lengthOfLongestSubstring = function(s) {
    let res = 0, start = 0;
  for (let i = 0; i < s.length; i++) {
        // index 是取的整个字符串里面某个字符的 index
        const index = s.indexOf(s[i], start);
        // 如果index < i 并且不为0，那么有重复的字符
        if (index > -1 && index < i) {
            start = index + 1;
        }
        res = Math.max(res, index - start + 1);
    }
    return res;
};


// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].

var nextGreaterElement = function(nums1, nums2) {


};