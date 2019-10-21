/**
 * 
 * Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 * 
 */

 // 深度优先遍历  先序后序[stack 栈 先进后出]  中序[queue 先进先出]

 // 广度优先遍历  先进先出[queue 先进先出]  也可以用递归

 // 可参考 102 107 二叉树的层次遍历 可以通过递归来做
 /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */

 // 队列 
var levelOrder = function(root) {
    if (root == null) return root
    let res = []
    let queue = []  
    queue.unshift(root)
    while(queue.length !== 0) {
        // var item = queue.pop()
        let arr = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
          let item = queue.pop()
          arr.push(item.val)
          let children = item.children
          // 这里 unshift(...children)
          if (children) {
            for (let k = 0; k < children.length; k++) {
              queue.unshift(children[k])
            }
          }
        }
        res.push(arr)
    }
    return res
};


// 用递归来做
var levelOrder = function(root) {
  
  var res = []
  var helpFunc = (root, index) => {
    if (root == null) return 
    res[index] = res[index] || []
    res[index].push(root.val)
    let children = root.children
    for (let i = 0; i < children.length; i++) {
      helpFunc(children[i], index + 1)
    }
  }
  helpFunc(root, 0)
  return res
}



// 分割线------------------
// 队列版本的优化，很赞，没有内层的循环
var levelOrder = function(root) {
  if (!root) return [];
  
  let res = [],
      floorVal = [],
      floor = [root],
      childrens = [];
  
  while(floor.length) {
      let current = floor.shift();
      
      for(let j = 0; j < current.children.length; j++) {
          childrens.push(current.children[j]);
      }
      floorVal.push(current.val);
      
      if (!floor.length) {
          floor = childrens;
          res.push(floorVal);
          childrens = [];
          floorVal = [];
      }
  }
  return res;
};

// 递归版本改良

var levelOrder = function(root) {
  
  var res = []
  var helpFunc = (node, index) => {
    if (node == null) return 
    res[index] = res[index] || []
    res[index].push(node.val)
    node.children.forEach(item => helpFunc(item, index + 1))
  }
  helpFunc(root, 0)
  return res
}