## git hooks

#### 什么是git钩子 ？

git能在特定的重要动作发生时触发自定义脚本,或者执行特定的操作。

git钩子分客户端和服务端的，客户端钩子由诸如提交和合并这样的操作所调用，而服务器端钩子作用于诸如接收被推送的提交这样的联网操作。

#### git 钩子 在那里？

存储在.git/hooks目录下面，当你用git init 初始化一个git本地仓库之后，默认会在该目录下创建一些实例脚本。
例子：
`mkdir temp-git-repo && cd temp-git-repo && git init && ls .git/hooks `

#### 怎么使用？

这个文件夹下面有很多样例，我们一般用的是commit前做一些操作。
将pre-commit.sample修改为pre-commit 然后在这个脚本里面做操作.【或者自己创建一个pre-commit文件，但是要赋予执行权限】

An example hook script to verify what is about to be committed. Called by "git commit" with no arguments.  The hook should exit with non-zero status after issuing an appropriate message if it wants to stop the commit. 如果检查有问题返回一个非0即可，那么git会阻止提交。

---

.git 是不会提交到git服务其上面，所以我们利用git钩子来约束代码需要其他的工具库。
 
 1， [husky](https://github.com/typicode/husky)  对于前端项目 和 nodeJS 项目，我们需要用到这个库。

 步骤 a:

  ```npm install husky --save-dev```
  
  安装好了之后，husky库会修改我们仓库下的pre-commit文件。

步骤 b:
在package.json下面增加节点
```javascript
{
  "husky": {
    "hooks": {
      "pre-commit": "echo 'before commit output some str'"
    }
  }
}
````

这样我们每次提交的时候都会看到打印了这一句： before commit output some str 

2，[lint-staged](https://github.com/okonet/lint-staged)

步骤a: 

``` npm install lint-staged --save-dev```

步骤b:

在package.json增加如下的节点,并且增加相应的.eslintrc  .stylelintrc文件

```javascript
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "**/*.js": "eslint --ext .js",
      "**/*.vue": "eslint --ext .vue",
      "**/*.scss": "stylelint --syntax scss && stylelint --fix scss"
    },
    "ignore": ["**/static/*.js", "**/static/*.css"]
  }
```

每次提交之前都会帮我们去执行eslint的检查 和 stylelint的检查&修复。

tip：

 lint-staged只会去检查staged中的文件【也就是git add到本地仓库中暂存的文件】

文件路径：
```javascript
{
  // .js files anywhere in the project 当前项目任何位置的js文件
  "*.js": "eslint",
  // .js files anywhere in the project 当前项目任何位置的js文件
  "**/*.js": "eslint",
  // .js file in the src directory  src目录下的js文件
  "src/*.js": "eslint",
  // .js file anywhere within and below the src directory src目录下以及任意子目录下的js文件
  "src/**/*.js": "eslint",
}
```

---

到目前位置我们已经做了提交前的检查，但是检查只是检查了语法和规范的，这些语法和规范我们是定义在.eslintrc和.stylelintrc里面。

现在存在一个问题，当我们引入资源的时候，路径没有正确，恰好又没有将错误信息输出到浏览器里面，这时候就会出错。

这时候需要另外的插件来完成检查资源是否被正确引用。

需要这这两个库：

```eslint-import-resolver-webpack```  webpack配置的别名里面，配置路径的解析

```eslint-plugin-import``` 相对路径or绝对路径的解析



.eslintrc文件下面根节点下面增加节点：
```javascript
{
  plugins: [
    // other plugin
    'import'
  ],
  settings: {
    "import/resolver": {
        "webpack": {
            "config": "./build/webpack.base.conf.js" // 相对与.eslintrc文件 配置alias别名的webpack的配置文件的位置
        }
    }
  }
}
```

这里有一个链接有更多的详情： [https://blog.csdn.net/a5534789/article/details/84754572](https://blog.csdn.net/a5534789/article/details/84754572)