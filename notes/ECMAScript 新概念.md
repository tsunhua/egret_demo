
ECMAScript 新概念
-------------

#### 箭头函数

作用：匿名函数，简化函数的定义。当函数只包含一个表达式时，将`{...}`和`return`都省略掉；当函数包含多条语句时，不能省略`{...}`和`return`；当参数**不是一个**时需要用括号`()`包裹起来。示例：

```javascript
x => x * x
//等价于
function (x) {
    return x * x;
}

///多条语句情况
x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}

///参数不是一个的情况
// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

///注意：单表达式返回对象时，需要使用括号
x => ({ foo: x })
```

#### this指向和绑定

- 类的方法内部如果含有`this`，它默认指向类的实例。
- 箭头函数的`this`总是指向词法作用域，也就是外层调用者。

解决`this`指向错误的几个方法：

**在构造函数中绑定this**

```javascript
class Logger{
  constructor(){
    this.printName = this.printName.bind(this);
  }
}
printName(name = "oo"){
  this.print("Hello ${name}");
}
print(text){
  console.log(text);
}
```

**使用箭头函数**

```javascript
class Logger{
  constructor(){
    this.printName = (name = "00")=>{
      this.print("Hello ${name}");
    };
  }
}
```

#### gettter

语法：

```javascript
{get prop() { ... } }
{get expression { ... } }//使用变量作为函数名，始于ES2015
```

示例一：

```javascript
var obj = {
  log: ['test'],
  get latest () {
    if (this.log.length == 0) return undefined;
    return this.log[this.log.length - 1];
  }
}
console.log(obj.latest); // Will return "test".
```

示例二：

```javascript
var expr = "foo";

var obj = {
  get [expr]() { return "bar"; }
};
console.log(obj.foo); // "bar"
```

#### setter

语法：

```javascript
{set prop(val) { . . . }}
{set [expression](val) { . . . }} //使用变量作为函数名，始于ES2015
```

示例一：

```javascript
var language = {
  set current (name) {
    this.log.push(name);
  },
  log: []
}
language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']
```

示例二：

```javascript
var expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) { this.baz = v; }
};

console.log(obj.baz); // "bar"
obj.foo = "baz";      // run the setter
console.log(obj.baz); // "baz"
```

