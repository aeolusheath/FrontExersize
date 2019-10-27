/**
 * 
 * 
 * 
 * You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

  The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

  Example 1:
  Input: Binary tree: [1,2,3,4]
        1
      /   \
      2     3
    /    
    4     

  Output: "1(2(4))(3)"

  Explanation: Originallay it needs to be "1(2(4)())(3()())", 
  but you need to omit all the unnecessary empty parenthesis pairs. 
  And it will be "1(2(4))(3)".
  Example 2:
  Input: Binary tree: [1,2,3,null,4]
        1
      /   \
      2     3
      \  
        4 

  Output: "1(2()(4))(3)"

  Explanation: Almost the same as the first example, 
  except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 * 
 * 
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} t
 * @return {string}
 */

// 递归 --- 先序遍历
var tree2str = function(t) {
  function helpFunc(node) {
    if (!node) return ''
    // 左节点为空  右节点为空 
    if (!node.left && !node.right) {
      console.log(node.val, 'kevinkangnnnnnn')
        return `${node.val}`
    }
    // 左节点不为空  右节点为空
    if (!node.right && node.left) {
        return `${node.val}(${helpFunc(node.left)})`
    }

    // 最后这两个可以合并成一个，并且实际上不应该有if语句，单个root节点会有问题
    if (!node.left && node.right) {
      return `${node.val}()(${helpFunc(node.right)})`

    }
    // 左节点不为空 右节点不为空
    if (node.left && node.right) {
      return `${node.val}(${helpFunc(node.left)})(${helpFunc(node.right)})`
    }
    // 用到递归就不要用全局变量
    // ret = ret + '(' + helpFunc(node.left) +')'+ '(' + helpFunc(node.right)  + ')'
  }
  return helpFunc(t)
};

// better recursive   忽略右子节点，左子节点必须有空的()
var tree2str = function(t) {
  function helpFunc(node) {
    if (!node) return ''
    // 左节点为空  右节点为空 
    if (!node.left && !node.right) {
        return `${node.val}`
    }
    // 左节点不为空  右节点为空
    if (!node.right && node.left) {
        return `${node.val}(${helpFunc(node.left)})`
    }
    return `${node.val}(${helpFunc(node.left)})(${helpFunc(node.right)})`
  }
  return helpFunc(t)
};

var tree2str = function(t) {
  function innerFunc(node, res) {
    if (!node) return ''
    res = `${node.val}`
    if (node.right) {
      return res + `(${innerFunc(node.left, res)})` + `(${innerFunc(node.right, res)})`
    } 
    if (node.left && !node.right) {
      return res + `(${innerFunc(node.left, res)})`
    }
    return res
  }
  return innerFunc(t, '')
}


// 先序遍历， 通过stack来做,先进后出
var tree2str = function(t) {
  // 简单的边界 
  if (t == null) return ''
  var stack = [t]
  let visted = new Set()
  let s = ''
  while (stack.length != 0) {
    let item = stack[stack.length - 1]
    
    if (visted.has(item)) {
      stack.pop()
      s = s + ')'
    } else {
      visted.add(item)
      s += `(${item.val}`
      if (item.left == null && item.right !== null) {
        s += '()'
      } 
      // 先序遍历这里的顺序是错的，应该先push right 然后push left，pop是弹出最后一个，第二次犯这个错误了
      // if (item.left) {
      //   stack.push(item.left)
      // }
      // if (item.right) {
      //   stack.push(item.right)
      // }
      if (item.right) {
        stack.push(item.right)
      } 
      if (item.left) {
        stack.push(item.left)
      }     
    }
  }
  return s.substr(1, s.length - 2)
}