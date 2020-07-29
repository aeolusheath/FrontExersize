// 构造一棵哈弗曼树， 最优二叉树

// 二叉树节点的定义
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


// 给定一组权重值
const contructHaffumanTree = (weightArr) => {
  if (!weightArr || weightArr.length <= 0) { return null }
  let n = weightArr.length

  // 先对权重进行排序，构造哈夫曼树从权重最小的节点开始
  // 排序之后，依次从数组的头部获取即可。
  // 排序算法有多种，这里使用js默认方法
  const sortedWeightArr = weightArr.sort((num1, num2)=>num1 - num2)
  

  // 1， 构造森林
  let forest =  sortedWeightArr.map(v => new TreeNode(v))


  // 2,3 选取最小权重的两个节点，构造新树添加到森林中，删掉以前的两棵树
  // 合并n-1次，循环n-1次 直到森林中只有一棵树
  console.log(forest, 'kevin');
  let o = 1;
  for (let i = 1; i < n ; i++) {
    let minNode1 = forest.shift()
    let minNode2 = forest.shift()

    console.log(minNode1.val, minNode2.val, `循环次数${o++}`)
    let newNode = new TreeNode()
    newNode.val = minNode1.val +  minNode2.val
    newNode.left = minNode1
    newNode.right = minNode2
    forest.push(newNode); 
    // 为了后续的循环直接获取数组头部的元素（权重值最小的两个节点），这里直接再排一次序
    forest.sort((n1, n2) =>n1.val - n2.val)
  }
  // 4，森林里只有一颗树
  return forest[0]
}

contructHaffumanTree([7,5,2,4])

