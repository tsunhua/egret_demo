//注意声明该函数前，已经在index.html中将a.js作为模块依赖加入
//`<script egret="test" src="libs/a.js"></script>`
//此处演示的是ts调用js。js调用ts的后面再补充学习之。
declare function callJsFunc(msg: string);
class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        callJsFunc("fuck!!!!");
    }
}