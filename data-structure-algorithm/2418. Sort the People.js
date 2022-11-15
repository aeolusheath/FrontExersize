/**
 * 

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

 

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.

 * 
 * 
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
    var map = {}
    // get map object
    for (let i = 0; i < heights.length; i++) {
        map[heights[i]] =  names[i]
    }
    // sort the height
    // heights.sort((n1, n2)=>n1-n2) // increase order
    heights.sort((n1, n2)=>n2-n1) // decrease order
    for (let j = 0; j < names.length; j++) {
        heights[j] = map[heights[j]]
    }
    return heights
};


var bubleSort = (arr)=> {
    for(let i = 0; i< arr.length - 1; i++) {
        // let a = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            // 错误在于，执行if之后没有给a重新复制，所以下面的if才是正确的
            // let b = arr[j]
            // if (b >= a) {
            //     var t = arr[i]
            //     arr[i] = arr[j]
            //     arr[j] = t
            // }
            if (arr[j] >= arr[i]) {
                var t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
            }
        }
    }
    return arr
}