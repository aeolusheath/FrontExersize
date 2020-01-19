/**
 * 
 * 
 * 
 *  Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

    You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

    

    Example 1:

    Input: name = "alex", typed = "aaleex"
    Output: true
    Explanation: 'a' and 'e' in 'alex' were long pressed.
    Example 2:

    Input: name = "saeed", typed = "ssaaedd" "ssaaeedd"
    Output: false
    Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
    Example 3:

    Input: name = "leelee", typed = "lleeelee"
    Output: true
    Example 4:

    Input: name = "laiden", typed = "laiden"
    Output: true
    Explanation: It's not necessary to long press any character.
 * 
 */

 /**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// WRONG 
// "xnhtq"  "xhhttqq" 这种情况
// [ { x: 1 }, { n: 1 }, { h: 1 }, { t: 1 }, { q: 1 } ] 
// [ { x: 1 }, { h: 2 }, { t: 2 }, { q: 2 } ]
var isLongPressedName = function(name, typed) {
  const getGroup = (s) => {
    let cur = ''
    let ret = []
    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i)
      if (cur != c) {
        let obj = {}
        obj [c] = 1
        ret.push(obj)
        cur = c
      } else {
        ret[ret.length-1][cur] = ret[ret.length-1][cur] + 1
      }
    }
    return ret 
  }
  let nameGroup = getGroup(name)
  let typedGroup = getGroup(typed)

  for (let i = 0 ; i < nameGroup.length; i++) {
      let nValue = Object.values(nameGroup[i])[0]
      let tValue = Object.values(typedGroup[i])[0]
      if (tValue < nValue)
        return false
  }
  return true
}

// CORRECT
// 改进上面的方法
var isLongPressedName = function(name, typed) {
  const getGroup = (s) => {
    let cur = ''
    let ret = []
    for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i)
      if (cur != c) {
        let obj = {}
        obj [c] = 1
        ret.push(obj)
        cur = c
      } else {
        ret[ret.length-1][cur] = ret[ret.length-1][cur] + 1
      }
    }
    return ret 
  }
  let nameGroup = getGroup(name)
  let typedGroup = getGroup(typed)

  // 如果分组不想等，必然是错误的输入，这个容易遗漏
  if (nameGroup.length != typedGroup.length)
    return false

  for (let i = 0 ; i < nameGroup.length; i++) {
      let nKey = Object.keys(nameGroup[i])[0]
      let tKey = Object.keys(typedGroup[i])[0]
      let nValue = Object.values(nameGroup[i])[0]
      let tValue = Object.values(typedGroup[i])[0]
      if (nKey != tKey || tValue < nValue)
        return false
  }
  return true
}

// 方法二
// name = "saeed", typed = "ssaaedd"
var isLongPressedName = function(name, typed) {
  let j = 0;
  for (let c of name) {
    // WHY???
    if (j == typed.length)
      return false 
    // If mismatch
    if (typed.charAt(j) != c) {
      if (j == 0 || typed.charAt(j-1) != typed.charAt(j))
        return false

        // Discard all similar chars
        let cur = typed.charAt(j)
        while (j < typed.length &&  typed.charAt(j) == cur)
          j++
        
        // If next isnt a match and is false
        if (j == typed.length || typed.charAt(j) != c)
          return false
    }
    j++
  }
}