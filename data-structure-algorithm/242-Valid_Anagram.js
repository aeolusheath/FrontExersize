/**
 * 
    
    Given two strings s and t , write a function to determine if t is an anagram of s.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false
 * 
 * 
 */


 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 思路一 异或运算，这样有问题，比如s 为aa  t 为bb  异或运算的结果也是0
// 思路二 hashtable
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    var map = {}
    for (let i = 0; i < s.length; i++) {
        var cur = s[i]
        if (map[cur] == undefined) {
            map[cur] = 1
        } else {
            map[cur] = map[cur] + 1
        }
    }   
    console.log(map)
    for (let j = 0; j < t.length; j++) {
        var cur = t[j]
        if (map[cur] !== undefined) {
            map[cur] = map[cur] - 1
        }
    }
    console.log(map)
    var keys = Object.keys(map)
    for (let k = 0; k < keys.length; k++) {
        const value = map[keys[k]]
        if (value >= 1)
            return false
    }
    return true
};

var ret = isAnagram('abca', 'cbaa')
console.log(ret, 'ret------')

// 对上面的代码进行优化
// 对前两个进行优化
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    var map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1
        map[t[i]] = (map[t[i]] || 0) - 1
    }
    var keys = Object.keys(map)
    for (let i = 0; i < keys.length; i++ ) {
        if (map[keys[i]] !==0)
            return false
    }
    return true
}