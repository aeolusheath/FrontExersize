/**
 *
 *
 * Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
// vertical scanning
var longestCommonPrefix = function(strs) {
    if(strs.length ===0)
        return ""
    if(strs.length === 1)
        return strs[0]
    // var char = strs[0].charAt(0) // 如果直接取 str[0][0]的话，""[0]会是undefined
    for (let i = 0; i < strs[0].length; i++) {
        const isCommon = true
        var char = strs[0].charAt(i)
        for(let j = 1 ; j < strs.length; j++) {
            if(char !== strs[j][i]) {
            // if(strs[j].indexOf(char))
                // isCommon = false
                // break
                return strs[0].substr(0, i)
            }
        }

    }
    return strs[0]
}


// horizontal scanning
var longestCommonPrefix = function(strs) {
    if (strs.length === 0)
        return ""
    if (strs.length === 1) {
        return strs[0]
    }
    let fStr = strs[0]
    for(let i = 0; i < strs.length; i++) {
        while(strs[i].indexOf(fStr)!= 0) {
            fStr = fStr.substr(0, fStr.length - 1)
        }
    }
    return fStr
};