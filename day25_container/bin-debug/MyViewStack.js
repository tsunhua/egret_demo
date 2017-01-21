var MyViewStack = (function (_super) {
    __extends(MyViewStack, _super);
    function MyViewStack() {
        _super.call(this);
    }
    var d = __define,c=MyViewStack,p=c.prototype;
    p.createChildren = function () {
        var _this = this;
        _super.prototype.createChildren.call(this);
        //ViewStack的layou属性是只读的！
        var btn1 = new eui.Button();
        btn1.label = "egret Button 1";
        this.addChild(btn1);
        var btn2 = new eui.Button();
        btn2.label = "egret Button 2";
        this.addChild(btn2);
        this.selectedIndex = 1;
        var timer = new egret.Timer(500, -1);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.selectedIndex = (_this.selectedIndex == 0 ? 1 : 0);
        }, this);
        timer.start();
    };
    return MyViewStack;
}(eui.ViewStack));
egret.registerClass(MyViewStack,'MyViewStack');
//# sourceMappingURL=MyViewStack.js.map