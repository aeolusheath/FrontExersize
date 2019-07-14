/**
 * 
    Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

    Examples:

    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.
    Note: You may assume the string contain only lowercase letters.
 * 
 */



 // related topics
 // hashtable
var firstUniqChar = function(s) {
    var map = {}
    for(let i = 0; i < s.length; i++) {
        if (map[s[i]] == undefined) {
            map[s[i]] = 1
        } else {
            map[s[i]] = map[s[i]] + 1
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] == 1) {
            return i
        }
    }
    
    return -1
    
};

// 双指针？
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        var startIndex = s.indexOf(s[i])
        var lastIndex = s.lastIndexOf(s[i])
        if (startIndex == lastIndex) {
            return startIndex
        }
    }
    return -1
};