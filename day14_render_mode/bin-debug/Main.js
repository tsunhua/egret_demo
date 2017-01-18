var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        //获取当前的渲染模式
        //Canvas渲染：老旧
        //WebGL渲染：硬件加速
        //手机上非 Chrome 浏览器现在对不规则遮罩支持还不是很好
        //在使用 WebGL 渲染器时可以尽量避免使用不规则遮罩。
        //在 index.html 的启动函数中指定渲染模式即可开启 WebGL 渲染模式。
        //如果我们不指定任何参数将仍然使用 Canvas 渲染。
        console.log(egret.Capabilities.renderMode);
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map