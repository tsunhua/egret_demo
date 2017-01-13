TypeScript中的一些概念
-------

#### 类型批注

TypeScript通过类型批注提供静态类型以在编译时启动类型检查。这是可选的，而且可以被忽略而使用JavaScript常规的动态类型。

使用范围：变量、函数参数、函数返回值。

书写示例：

```typescript
let x:number = 2;
function add(x:number,y:number):number{
  return x + y;
}
```

#### 联合类型

表示一个值的类型可为多种类型之一。

```typescript
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

#### keyof 和查找类型

`keyof `输入索引类型查询

`keyof T` 是T的属性名称，是string的子类型

```typescript
interface Person{
  name:string;
  age:string;
  location:string;
}
type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "lenght" | "push" | ...
type K3 = keyof{[x:string]:Person} // string
```

查找类型：索引访问类型，像元素访问但写成类型

```typescript
type P = Person['name']; // string

function getProperty<T, K extends keyof T>(obj:T,key:K){
  return obj[key];//推断类型为T[K];
}
```

#### Partial、Readonly

保持类型相同，但每个类型都是可选的

```typescript
type Partial<T>={
  [P in keyof T]?:T[P];
}
```

保持类型相同，但每个属性都是只读的

```typescript
type Readonly<T>={
  readonly [P in keyof T]:T[P];
}
```







