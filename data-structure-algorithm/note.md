## 11月-第一周

1，二叉搜索树-中序遍历的结果是一个递增序列

2，求二叉树的最大深度，第一种是传入一个参数，第二种解法: 不使用额外的参数求最大深度。【max(depth of node.left, depth of node.right) + 1】


3, big error. 对于两个不等的正整数   low hight .
   Math.floor( (low + hight)/2 )
   Math.floor( (low + (heigh - low))/2 ) 
   这两个值是并不相等的。二分法中，出现了问题。 比如 举例：  1, 3。 (1+3)/2为2； (1+(3-1))/2为1.5。 然后Math.floor之后一个
