## key 
在getter中收集依赖，在setter中触发依赖

## 问题
数据的变化是通过getter/setter来追踪的。因为这种追踪方式，有些语法中即便是数据发生了变化，Vue.js也追踪不到。

1，向Object添加属性
2，删除Object中的属性。
