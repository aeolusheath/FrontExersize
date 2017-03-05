##  python note
python 里面求余

python 打印字符串，查看两句话的区别，加了r之后

```python
print('I \'m OK, god') 
  
print(r'I \'m OK, god')
```

python 打印字符串的换行符是'''some content ... some content ''',运行下面的代码

```python
print('''kevin...are you OK?''')
```

布尔值之间的计算直接使用  and or not 来计算
python中表示空用 none 表示

```python
    #变量赋值 也可以这样赋值
    a, b, c = 1, 2, "john"
```


```python
    # 请看下面两个的区别， 打印的长度分别是 6 和 2

    print('中文')

    print('中文'.decode('utf-8'))  #控制台里面直接运行这句代码和下面这句代码显示的值不同 

    '中文'.decode('utf-8')
```

python中的`有`序列表是 `list` ,类似于js中的数组。索引这些不用说和JS Java中的一样。
获取list中最后一个元素可以这样 `list[-1]` 来获取
`并且` list中的item 数据格式可以不一样。

```python
    nameList=['kevin', 'Jack'] 
    type(nameList) #会打印出 <type 'list'>

    #append()  在列表末尾增加一个元素
    nameList.append('Kaiqiang')
    #打印结果 ['kevin', 'Jack', 'Kaiqiang'] 

    #insert()  在特定位置插入一个元素
    nameList.insert(1, 'Kaifeng')
    #打印结果 ['Kevin', 'Kaifeng', 'Jack', 'Kaiqiang']

    #pop() 删除列表末尾的元素,并且返回被删除的元素
    nameList.pop()
    #打印结果 ['Kevin', 'Kaifeng', 'Jack']
    
    #pop(index) 删除特定位置的元素,返回被删除的元素
    nameList.pop(1)
    #打印结果 ['Kevin', 'Jack']
```
python中另外一个有序的列表是 `tuple`, 也叫做元祖。它和list非常类似，`但是`一旦初始化之后就
不能修改,因此insert 和 append方法是不能调用的,它是这样定义的：

```python
    nameList_two = ('Kevin', 'Kaiqiang', 'Kaiyue')

    #设置包含一个元素的元素
    #但是
    tuple_temp = (1) #tuple_temp 的值是自然数 1
    type(tuple_temp)  #<type 'int'>
    #为了设置包含一个元素的元组

    tuple_temp = (1,) #加个逗号, 消除歧义
    type(tuple_temp) #<type 'tuple'>
```

上面说完了列表，咱们来说键值对，python里面的dict 就实现了这样的功能，他是一个键值对（key-value格式），它相当于
java中的Map一样,直白点就是数据字典。

```python
    #定义一个数据字典
    d = {'Michael': 95, 'Bob': 75, 'Tracy': 85} 
    #这个和js中对象不同 ,key必须是字符串。
    #而且必须d['Bob']这样调用,不能d.Bob这样调用
    #也可以和javascript一样，d['Kevin'] = 95 直接增加一个属性

    #请注意
    d['Liar']   
    #这句代码会报KeyError: 'Liar'错误 （而js中 会是undefined
    #为了避免错误,两种方式
    # 1) 先判断,  isInDict = 'Liar' in d 
    # 2) 使用get方法  d.get('Liar', '如果没有的话,这里是一个默认值')


    #删除某一个key对象
    d.pop('Bob') 
    #返回被删除的value
``` 

关于set,set只是存储了key值,并且key值必须是hashable,也就是说key只能是值类型 
dict的key是不可变的,是同样的道理，key必须是hashable的。

```python
    s = set()
    #方法 add方法和remove方法，就是增加和删除元素
    s.add([1,2,3]) #报错,unhashable type 'list'
    #只能增加值类型
```


#### 常用函数
python里面首先已经有许多常用的内置函数:
```python
    
    result = abs(-0.5)  #求绝对值 abs
    result = max(1, 2, 3, 4)  #求各个数字中的最大值
```

