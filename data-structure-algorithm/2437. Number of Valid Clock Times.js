/**
 * 

You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.

 

Example 1:

Input: time = "?5:00"
Output: 2
Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.
Example 2:

Input: time = "0?:0?"
Output: 100
Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.
Example 3:

Input: time = "??:??"
Output: 1440
Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.
 

Constraints:

time is a valid string of length 5 in the format "hh:mm".
"00" <= hh <= "23"
"00" <= mm <= "59"
Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.

 * 
 */

/**
 * @param {string} time
 * @return {number}
 */
 var countTime = function(time) {
    var map = {}
    for (let i = 0; i < time.length; i++) {
        map[i] = time[i]
    }
    // var first = map[0]
    // var second = map[1]
    // var third = map[3]
    // var fourth = map[4]


    var first = time[0]
    var second = time[1]
    var third = time[3]
    var fourth = time[4]

    var f = 1,s =1,t = 1,fo = 1 
    // if (second == '?') {
    //     s = 4
    // } else {
    //     if (Number(second) >=4) {
    //         f = first == '?' ? 2 : 3
    //     }
    // }
    var fs = 1
    // if (first ==='?') {
    //     if (second ==='?') {
    //         fs = 24 // 2 * 10 + 4
    //     }
    //     else if (Number(second>=4)) {
    //         fs = 2
    //     } else if (Number(second) < 4) {
    //         fs = 3
    //     }
    // } else {
    //    fs = (first == '0' || first=='1') ? 10 : (first =='1') 
    // }

    // 穷举法 a && b 

    if (first == '?' && second == '?') {
        fs = 24
    } else if (first == '?') {
        fs = (Number(second) >= 4) ? 2 : 3
    } else if (second == '?') {
        fs = Number(first) == 2 ? 4 : 10
    }
  
    if (fourth == '?') {
        fo = 10
    }
    if (third == '?') {
        t = 6
    }

    return fs * t * fo
};