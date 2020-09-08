/** 图论- 广度优先遍历 */


function Graph(vexs = [], arcs = []) {
  this.vexs = vexs
  this.arcs = arcs
}

const vexs= [ 'A', 'B', 'C', 'D', 'E', 'F', 'G']

const arcs=
	[
	  [0, 1, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
  ]
  
var graph = new Graph(vexs, arcs);

let visited = []

function bfs(graph) {
	
  // // 从节点A开始
  let queue = []
  queue.push(0)

  while (queue.length !==0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      // 当前顶点
      let index = queue.shift()
      console.log(`当前访问的是第${index}个节点: `, graph.vexs[index])
      visited[index] = true
      // 找到当前顶点的所有邻接点
      for(let j =0; j < graph.vexs.length; j++) {
        if(graph.arcs[index][j] !==0 && visited[j]!==true) {
          queue.push(j)
          // 这里也必须加上 visited[j] = true 不然会重复入队
          visited[j] = true
        }
      }
      console.log(queue)

    }
  }
}

bfs(graph)