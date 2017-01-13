///使用矢量绘图
var AVectorDrawingStart = (function (_super) {
    __extends(AVectorDrawingStart, _super);
    function AVectorDrawingStart() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=AVectorDrawingStart,p=c.prototype;
    p.onAddToStage = function (e) {
        var shp = new egret.Shape();
        shp.x = 100;
        shp.y = 100;
        //设置线的风格，在开始绘制前调用
        shp.graphics.lineStyle(20, 0x0000ff);
        //开始填充：填充色，不透明度
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawRect(0, 0, 100, 200);
        shp.graphics.endFill();
        this.addChild(shp);
        shp.touchEnabled = true;
        shp.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            console.log("click");
            shp.graphics.clear();
        }, this);
    };
    return AVectorDrawingStart;
}(egret.DisplayObjectContainer));
egret.registerClass(AVectorDrawingStart,'AVectorDrawingStart');
//# sourceMappingURL=AVectorDrawingStart.js.map