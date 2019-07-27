# Object的变化是靠setter来追踪的，只要一个数据发生了变化，一定会出发setter

但是数组使用push操作，我们没有办法拦截到。【es6之前没有proxy 元编程能力，就是在原生方法前后增加操作】

所以用一个拦截器覆盖Array.prototype。