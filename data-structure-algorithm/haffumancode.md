#### 定义

 &ensp;&ensp;    [哈夫曼树](https://blog.csdn.net/a5534789/article/details/107086051)： 带权路径长度和最短的二叉树，也称之为最优二叉树。

 &ensp;&ensp;    哈夫曼编码：在网络传输过程中，对所有的信息进行编码，所有的信息都将转换为0101的二进制形式，根据信息出现的频率，将信息构造成长度最短的编码。


---

#### 原理

 &ensp;&ensp;     比如字符`ABCDEBAADF` 的字符集合。传输过程中，我们将每一个字符转换成二进制的形式，但是同时要保证这个二进制数据的长度最小。【保证传输的效率】



&ensp;&ensp;    这就可以和哈夫曼树联系起来，出现概率最大的字符离根节点最近，出现概率最小的字符离根节点最远； 所有的字符都是在哈夫曼树的叶子点上，每个根节点到叶子节点的路径是唯一的。

&ensp;&ensp;   在这颗哈夫曼树上面每个分支标上0或者1，节点的左分支标记0，节点的右分支标记1，把每个从根节点到叶子节点的路径上的标记号连接起来作为该叶子节点的字符的编码。

---


#### 案例

> **例一**

以`ABCDEBAADFFFFF`为例，假定我们需要传递这个字符集合，出现的字符有 `{ A, B, C, D, E, F }`  分别出现的次数为`{  3, 2,  1, 1, 1, 5 }`。


然后构造的**哈夫曼树**长下面这样([如何构造哈夫曼树请点击我](https://blog.csdn.net/a5534789/article/details/107086051))：

```bash
	     11
	    /  \   
	  F(5)  8 
	       /  \
		 A(3)  5
		     /   \                                                 
		    B(2)   3 
			     /   \ 
			  C(1)     2
				     /   \
				 D(1)     E(1)
```



然后给分支加上标记：

```bash
	     11
	   0/  \1   
	  F(5)  8 
	      0/  \1
		 A(3)  5
		    0/   \1                                                 
		    B(2)   3 
			    0/   \ 1
			  C(1)     2
				    0/   \1
				 D(1)     E(1)
```

因为所有的字符都在叶子节点上，每个叶子节点的路径肯定是唯一的，并且不会`前缀包含`，就是说不会存在A的编码为001，B的编码为0011。

从上面的哈夫曼树以及路径的标记来看，我们可以得到各个字符的编码为：

```javascript

  A:  10
  B： 110
  C:  1110
  D:  11110
  E:  11111
  F:  0

```

> **例二**


现在的字符集是`CASTTAAJJASTJC`， 里面的字符集是`{  C, A, S, T, J }`，出现的次数为`{2, 4, 2, 3, 3 }`

构造出来的哈夫曼树长下面这样：

```bash
	     14
      /      \                                                 
     6         8 
  /   \      /   \
T(3)  J(3) A(4)    4
            /   \
          C(2)   S(2)
```

加上标记的哈夫曼树长这样：

```bash
	    14
     0/     \1                                                 
     6         8 
 0/   \1    0/   \1
T(3)  J(3) A(4)    4
	            0/   \1
	          C(2)    S(2)
```

从上面的哈夫曼树以及路径的标记来看，我们可以得到各个字符的编码为：

```javascript

  C:  110
  A： 10
  S:  111
  T:  00
  J:  01

```

比如电文为 `CAT` 这时候编码为 `1101000`, 而且反过来推，我们也能得到唯一的结果`CAT`。


---

#### 算法实现
 &ensp;&ensp;   实际上我们求出了哈弗曼树，就可以求出哈夫曼编码了, 每个叶子节点的路径根据`1/0`记录一下即可。


> 前景提要


 &ensp;&ensp;   前提，二叉树节点的定义：

```javascript

	function TreeNode(val, left, right) {
	  this.val = (val===undefined ? 0 : val)
	  this.left = (left===undefined ? null : left)
	  this.right = (right===undefined ? null : right)
	}

```

&ensp;&ensp;  假定给的数据格式如下,key代表着字符集中的字符，weight代表出现的次数，也可以是出现的概率。

```javascript
	 const data = [
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
```




> 第一步，构造huffman tree

```javascript

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

      console.log(JSON.stringify(foreast[0], null, 2), 'haffumantree 是否有');

      // 4 森林里只有一颗树
      return foreast[0]

    }


```

> 第二步 遍历这颗haffuman tree 得到每个叶子节点的从根节点到该叶子节点的路径【原则就是 左 0 右 1】


做一次遍历即可，咱们那这里用的是递归后序遍历


```javascript

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
  return map
 }


```

完成了，下面是测试代码：

```javascript

// data 来自于上面的测试数据

const haffumanTree = contructHaffumanTree(data)

const haffumanCode = getConstructHaffumanCode(haffumanTree)

console.log(JSON.stringify(map, null, 2))

/**
 * 结果为：
 * 
 *  {
 *    "T": "00",
 *    "J": "01",
 *    "A": "10",
 *    "C": "110",
 *    "S": "111"
 *  }
 * 
 **/
```

