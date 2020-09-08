/** 图论- 深度优先遍历 */


function Graph(vexs = [], arcs = []) {
  this.vexs = vexs
  this.arcs = arcs
}

const vexs= [ 'A', 'B', 'C', 'D']

const arcs=
	[
	  [0, 1, 1, 0],
	  [1, 0, 1, 1],
	  [1, 1, 0, 1],
	  [0, 1, 1, 0]
  ]
  
  var graph = new Graph(vexs, arcs);

  let visited = []

function dfs(graph, v = 0) {
	
	// 从节点A开始
	console.log(`当前访问的是第${v}个节点：`, graph.vexs[v])
	visited[v] = true
    // 相当于按照行遍历这个矩阵
	for (let i = 0; i < graph.vexs.length; i++) {
    console.log('1122', graph.arcs[v][i], visited[i])
	    if (graph.arcs[v][i]!==0 && visited[i]!==true) {
	    	dfs(graph, i)
	    }
	}

}

dfs(graph)