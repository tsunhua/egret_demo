var BDrawingCircle = (function (_super) {
    __extends(BDrawingCircle, _super);
    function BDrawingCircle() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=BDrawingCircle,p=c.prototype;
    p.onAddToStage = function (e) {
        var shp = new egret.Shape();
        shp.x = 100;
        shp.y = 100;
        shp.graphics.lineStyle(10, 0x00ff00);
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawCircle(0, 0, 40);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return BDrawingCircle;
}(egret.DisplayObjectContainer));
egret.registerClass(BDrawingCircle,'BDrawingCircle');
//# sourceMappingURL=BDrawingCircle.js.map