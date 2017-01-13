TypeScript中的一些概念
-------

#### 类型批注

TypeScript通过类型批注提供静态类型以在编译时启动类型检查。这是可选的，而且可以被忽略而使用JavaScript常规的动态类型。

使用范围：变量、函数参数、函数返回值。

书写示例：

```javascript
let x:number = 2;
function add(x:number,y:number):number{
  return x + y;
}
```

#### 联合类型

表示一个值的类型可为多种类型之一。

```javascript
//表示commanline的类型可为字符串数组、字符串或者任意返回值为字符串的function
var commandline:string[]|string|(()=>string);
```

可以自由使用所有类型的共有属性，比如`length`，但是当使用特定类型的特定属性时最好使用`typeof`进行类型保护。

#### 交叉类型

表示一个值的类型同时为多种类型。

```typescript
//类型重命名
type LinkedList<T> = T & {next: LinkedList<T>};
interface Person{
  name:string;
}
var people:LinkedList<Person>;
var s = people.name;
var s = people.next.name;
```

#### 只读属性readonly

只在初始化和在同一类的构造函数中赋值，其他情况赋值不被允许。

```typescript
interface Point{
  readonly x:number;
  readonly y:number;
}
```





