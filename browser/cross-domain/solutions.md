跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 让运行在一个 origin (domain) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源本身所在的服务器「不同的域、协议或端口」请求一个资源时，资源会发起一个「跨域 HTTP 请求」。

详细文章： https://juejin.im/post/5e948bbbf265da47f2561705?utm_source=weibo&utm_campaign=admin#heading-34


解决方案：

1，服务器直接处理，像node或者其他的服务端可以添加【cors】 允许跨域

2，用NODE作了一层代理【正向代理】
   A，前端在开发环境的时候使用webpack启动的web服务，在dev配置文件里面配置代理（正向代理） 
   B，cors-anywhere库，node server服务

3，使用nginx作了一层代理【反向代理】
   什么叫正向代理呢 ，可以理解为 ip:80 与 ip:90 ------> 【代理服务器】 ----->  ip:8899  代理服务器就是一个跳板机。
   什么叫反向代理呢 ，可以理解为 ip:80/api 与 ip:80/default ------> 【代理服务器】 ----->  /api到一个服务 /default到另一个服务

4，JSONP
   利用script标签没有跨域限制这个特性来完成的。仅支持GET请求

5，Websocket
   经常使用，但是它确实是可以跨域的。WebSocket 规范定义了一种 API，可在网络浏览器和服务器之间建立“套接字”连接。简单地说：客户端和服务器之间存在持久的连接，而且双方都可以随时开始发送数据。

6，window.postMessage

7, window.name + iframe

8, window.location.hash + iframe







  提示：

  正向代理与反向代理的区别，参考资料： https://www.cnblogs.com/anker/p/6056540.html