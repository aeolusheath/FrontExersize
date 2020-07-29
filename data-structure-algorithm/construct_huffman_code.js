/**
 * 
 * 哈夫曼编码的
 *
 * 给定{ C A S T J }  出现的次数为{ 2, 4, 2, 3, 3 }
 * 
 *  
 */

// 树的节点
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


// 假定给的是一个map 
/**
 *  
 * {
 *  A: 4,
 *  C: 2,
 *  S: 2,
 *  T: 3,
 *  J: 3
 * }
 * 
 * 
 * 
 * ACSTJ 42233
 * arr 的输入格式是这样
 * 
 * [
 *  {
 *    key: 'A',
 *    weight: 4
 *  },
 *  {
 *    key: 'C',
 *    weight: 2
 *  },
 *  {
 *    key: 'S',
 *    weight: 2
 *  },
  *  {
 *    key: 'T',
 *    weight: 3
 *  }, 
 *  {
 *    key: 'J',
 *    weight: 3
 *  }
 * ]
 */


 

 // step 1 构造一颗哈夫曼树
  function contructHaffumanTree(arr) {
    if (!arr || arr.length <=0) return null
    let n = arr.length;

    // 先对各个节点根据权重的大小进行排序
    const sortedWeightArr = arr.sort((a, b) => a.weight - b.weight);

    // 1，构造森林，将每一个节点构造成只有一个根节点的
    const foreast = sortedWeightArr.map(item => new TreeNode(item))

    // 2 - 3  遍历n-1次，合并n-1次，每次合并weight最小的两颗树，然后放进森林中，然后
    for (let i = 1; i < n; i++) {
      // 删掉两颗权重最小的老树
      const minNode1 = foreast.shift()
      const minNode2 = foreast.shift()
      
      const newNode = new TreeNode({
        key: minNode1.val.key + minNode2.val.key,
        weight: minNode1.weight + minNode2.weight
      })

      newNode.left = minNode1
      newNode.right = minNode2

      // 添加合并的新树到森林里面
      foreast.push(newNode)
      foreast.sort((a, b) => a.val.weight - b.val.weight)
    }

    console.log(JSON.stringify(foreast[0], null, 2), 'haffumantree');

    // 4 森林里只有一颗树
    return foreast[0]

  }




 // step 2 然后获取各个叶子节点的哈夫曼编码, 最简单的思路就是
 function getConstructHaffumanCode(tree) {
  // 返回的数据map
  let map = {}
  
  // 遍历这颗二叉树,每一次传递左0，右1，记录路径
  let help = (root, paths) => {
    if (root) {
      if (root.left) {
        const upperPath = paths + '0'
        // help(root.left, paths, '0')
        help(root.left, upperPath)
      }
      if (root.right) {
        const upperPath = paths + '1'
        // help(root.right, paths, '1')
        help(root.right, upperPath)
      }
      // 如果是根几点
      if (!root.left && !root.right) {
         var data = root.val 
         map[data.key] = paths
      }
    }
  }

  help(tree, '')
  console.log('最后的哈夫曼编码是：\n\n',  JSON.stringify(map, null, 2))
  return map
 }






// 定义了各个节点出现的次数，类似于概率
const data = 
     [
      {
        key: 'A',
        weight: 4
      },
      {
        key: 'C',
        weight: 2
      },
      {
        key: 'S',
        weight: 2
      },
      {
        key: 'T',
        weight: 3
      }, 
      {
        key: 'J',
        weight: 3
      }
     ]

const haffumanTree = contructHaffumanTree(data)

const haffumanCode = getConstructHaffumanCode(haffumanTree)
