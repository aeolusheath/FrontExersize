### DOCTYPE有什么作用
    `文档类型声明` 他只是用来给浏览器一个标准，让浏览器知道如何渲染这个页面。如果不写，这是以兼容模式来规范浏览器的行为。 一个比较有趣的解释是： 它就是类似于安全带，不系安全带的话没有特别的事情，但是一旦有不可预知的事情，那将无法控制。

### 行内元素和块级元素有哪些

    行内: img / input / span / i / em / a / strong / label / button / textarea / select

    块级: div / p / h1-6 / figure / figuration / address / ul / ol / dt / dd / table / pre / section / article 
    / header / footer

### import 和 link 的区别

    link 不只是能加载css 还可以用于定义RSS；link兼容性更好,因为import是CSS2.1提出来的；还有一个为了页面性能，请使用link，[
    Using LINK ensures that stylesheets will be downloaded in parallel across all browsers. The LINK LINK example demonstrates this, as shown in Figure 7. Using LINK also guarantees resources are downloaded in the order specified by the developer.](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)
