var BDisplayObjectMask = (function (_super) {
    __extends(BDisplayObjectMask, _super);
    function BDisplayObjectMask() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BDisplayObjectMask,p=c.prototype;
    p.onAddToStage = function (e) {
        var square = new egret.Shape();
        square.graphics.beginFill(0xff0000);
        square.graphics.drawRect(0, 0, 100, 100);
        square.graphics.endFill();
        this.addChild(square);
        var circle = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        square.mask = circle;
        square.mask = null;
    };
    return BDisplayObjectMask;
}(egret.DisplayObjectContainer));
egret.registerClass(BDisplayObjectMask,'BDisplayObjectMask');
//# sourceMappingURL=BDisplayObjectMask.js.map