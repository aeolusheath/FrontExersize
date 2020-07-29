const dataSource = 'https://s5.ssl.qhres.com/static/b0695e2dd30daa64.json';

/* globals d3 */
(async function () {
  const data = await (await fetch(dataSource)).json();
  const regions = d3.hierarchy(data)
    .sum(d => 1)
    .sort((a, b) => b.value - a.value);

  const pack = d3.pack()
    .size([1600, 1600])
    .padding(3);

  const root = pack(regions);

  const canvas = document.querySelector('canvas');
  const context = canvas.getContext('2d');
  const TAU = 2 * Math.PI;

  function draw(ctx, node, {fillStyle = 'rgba(0, 0, 0, 0.2)', textColor = 'white'} = {}) {
    const children = node.children;
    const {x, y, r} = node;
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU);
    ctx.fill();
    if(children) {
      for(let i = 0; i < children.length; i++) {
        draw(context, children[i]);
      }
    } else {
      const name = node.data.name;
      ctx.fillStyle = textColor;
      ctx.font = '1.5rem Arial';
      ctx.textAlign = 'center';
      ctx.fillText(name, x, y);
    }
  }

  draw(context, root);


  // 给canvas添加鼠标事件
  canvas.onmousemove = function(e) {
    // // 获取鼠标的坐标
    var x = e.pageX, y = e.pageY;
    console.log(e.clientX * 2, e.clientY * 2, '11111111')
    console.log(x, y, '222222');
    // if ( context.isPointInPath(x, y) ) {
    //   console.log('点击了----->>>>', x, y);
    // }
    // 需要遍历整个root节点，以及所有的子元素，如果当前鼠标在这个圆内，就去改变这个圆的样式 需要clearCircle 或者 clearReact
    // isInCircle(context, x, y, root);
    isInCircle(context, x * 2, y * 2, root)
    // const x = e.clientX * 2;
    // const y = e.clientY * 2;
    // isInCircle(context, x, y, root);
  }


  // 清除这个区域，实际上是 将背景颜色置为透明色
  CanvasRenderingContext2D.prototype.clearCircle = function(x, y, r) {
    context.save();
    context.fillStyle = "rgba(255,255,255,255)";
    context.beginPath();
    context.arc(x, y, r, 0, TAU);
    context.fill();
    context.restore();
  }
//   CanvasRenderingContext2D.prototype.clearCircle = function (x, y, r) {
//     context.save();
//     context.fillStyle = "rgba(255,255,255,255)";
//     context.beginPath();
//     context.arc(x, y, r, 0, TAU);
//     context.fill();
//     context.restore();
// };
  

  function isInCircle (ctx, mx, my, node) {
    const { children } = node
    if (children) {
      for (let i = 0; i < children.length; i++) {
        isInCircle(ctx, mx, my, children[i])
      }
    } else {
      // 如何给浮动到的那个圆添加一层颜色
      // 1，clearCircle/clearRect 先清除这个绘制的图形
      // 2，然后绘制一个新的图形
      const { x, y, r } = node
      if ( (my-y)*(my-y) + (mx-x)*(mx-x)  < r * r) {
        
        console.log(x, y, '到这里了吗？？？？？？？？------->>>>>>>>>>>');
        ctx.clearCircle(x, y, r)// 调用封装的方法
        ctx.fillStyle="rgba(255, 0,0, 0.2)"
        ctx.beginPath()
        ctx.arc(x, y, r, 0, TAU)
        ctx.fill()
        const name = node.data.name
        ctx.fillStyle= 'white'
        ctx.font = "1.5rem Arial";
        ctx.textAlign = "center";
        ctx.fillText(name, x, y);
      }

    }

  }

//   function isInCircle(ctx, mx, my, node) {
//     const children = node.children;
//     if (children) {
//         for (let i = 0; i < children.length; i++) {
//             isInCircle(ctx, mx, my, children[i]);
//         }
//     } else {
//         const { x, y, r } = node;
//         if ((my - y) * (my - y) + (mx - x) * (mx - x) < r * r) {
//             console.log(x, y);
//             ctx.clearCircle(x, y, r);
//             ctx.fillStyle = "rgba(255,0,0,0.2)";
//             ctx.beginPath();
//             ctx.arc(x, y, r, 0, TAU);
//             ctx.fill();
//             const name = node.data.name;
//             ctx.fillStyle = "white";
//             ctx.font = "1.5rem Arial";
//             ctx.textAlign = "center";
//             ctx.fillText(name, x, y);
//         }
//     }
// }

}());