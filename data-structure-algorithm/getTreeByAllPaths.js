/**
 * 现在的需求是 已知所有的路径，求这棵树
 */

 // 需求： 根据给定的的路径还原一棵树
 // getTreeByPaths
 // getForestByPaths


function formatFunc2() {
  // 已知所有的路径求一颗完整的树
  const arr = [
    ["a", "b"],
    ["a", "e"],
    ["a", "f"],
    ["a", "i"],
    ["a", "i", "j"],
  ];
  // 先构造rootNode
  const firstPath = arr[0];
  const getInitTree = (path) => {
    const obj = {}; // head
    let pointer = obj;
    // 也可以改成while循环
    for (let i = 0; i < firstPath.length - 1; i++) {
      pointer.value = firstPath[i];
      pointer.label = firstPath[i];
      pointer.children = [];
      const child = {
        label: firstPath[i + 1],
        value: firstPath[i + 1],
        children: [],
      };
      pointer.children.push(child);
      pointer = child;
    }
    return obj;
  };

  let initTreeNode = getInitTree(firstPath);


  // 然后遍历后续所有的路径 ,除了第一个
  for (let i = 1; i < arr.length; i++) {
    let path = arr[i]
    
    let pointer = initTreeNode
    
    for (let j = 0; j < path.length - 1; j++ ) {
      if (path[j] === pointer.value) {
        // parent 节点相同，判断 path[j+1] 是否在 pointer的children里面

        let findItem = pointer.children.find(item => item.value === path[j+1]) 
        // 如果在的话，指针往下移动即可
        if (findItem) {
          pointer = findItem
        } else {
          // 如果不在，那么将path[j+1]的节点放在 pointer的children里面  
          // 并且pointer指针指向这个child节点
          let child = {
            label: path[j+1],
            value: path[j+1],
            children: []
          }
          pointer.children.push(child)
          pointer = child
        }
      }
    }
  }
  console.log(JSON.stringify(initTreeNode), 'result----->>>>>');

}

formatFunc2()

function getForest() {
	const arr = [
		["a", "b"],
		["a", "c"],
		["a", "d"],
		["a", "e"],
		["e", "f"],
		["e", "g"],
		["i", "j"],
		["i", "k"],
		["o", "p"],
		["o", "p", "q"],
		["o", "u", "m"],
		["o", "u", "v"],
	];
	const res = [];
	const isHasRoot = (rootStr) => res.some(i => i.label === rootStr);
	for (let i = 0; i < arr.length; i++) {
		const pathRootStr = arr[i][0]; //  第1个元素，必定为根
		if (isHasRoot(pathRootStr)) {
			// todo 将这个数组，加在这个对象里面
			const tree = res.find(item => item.label === pathRootStr);
			let pointer = tree;
			const path = arr[i];
			// a b c i
			// a b l j

			// a c i
			// a b j

			// a b c i
			// a b l j

			//  a === a ; j= 0, a===path[0], findItem = b, pointer = b,j = 1, findItem = null, pointer = l , j = 2
			for (let j = 0; j < path.length - 1; j++) {
				if (i === 10) {
					console.log(path[j], pointer, path[j], "------>>");
				}
				console.log(pointer, "pointer---->>>");
				// 如果相等，那么下一个元素在children里面
				if (pointer.label === path[j]) {
					// 判断 下一个元素 是否在a的children里面

					// 如果在，那么pointer移动到这个元素上， 并且path往下面走
					const findItem = pointer.children.some(c => c.label === path[j + 1]);
					if (findItem) {
						pointer = pointer.children.find(c => c.label === path[j + 1]);
					} else { // 如果不在，那么a的children加上这个元素，pointer 指向这个元素， path往下面走
						const child = {
							label: path[j + 1],
							value: path[j + 1] + (j === path.length - 2 ? "-----root" : ""),
							children: [],
						};
						pointer.children = pointer.children || [];
						pointer.children.push(child);
						pointer = child;
					}
				} else { // 如果已经不等了，那么直接走完path即可，每一次往pointer里面添加即可
					// 已经不等的情况下，pointer的指针指向的就是path同样的值，也就是一定会走到上面的if语句里面
				}
			}
			// 将这个path 加到tree里面去
		} else {
			// 构建一颗树
			const obj = {};
			let pointer = obj;
			const path = arr[i];
			// 后面一个是前面一个的父亲节点
			for (let j = 0; j < path.length - 1; j++) {
				// 一定是有children的
				if (j < path.length - 1) {
					pointer.label = path[j];
					pointer.value = path[j];
					pointer.children = [];
					const child = {
						label: path[j + 1],
						value: path[j + 1],
						children: [],
					};

					// 这个child是叶子节点，value
					if (j === path.length - 2) {
						child.value = path[j + 1] + "-----root";
					}
					pointer.children.push(child);
					pointer = child; // 移动指针到下一个子节点
				} else {
					// 不用做操作
				}
			}
			res.push(obj);
		}
	}
	console.log(res, "res------->>>>>>");
}