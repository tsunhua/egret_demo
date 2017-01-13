///绘制曲线
var DCurve = (function (_super) {
    __extends(DCurve, _super);
    function DCurve() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=DCurve,p=c.prototype;
    p.onAddToStage = function (e) {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(2, 0x0000ff);
        shp.graphics.moveTo(50, 50);
        shp.graphics.curveTo(100, 100, 200, 50);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return DCurve;
}(egret.DisplayObjectContainer));
egret.registerClass(DCurve,'DCurve');
//# sourceMappingURL=DCurve.js.map