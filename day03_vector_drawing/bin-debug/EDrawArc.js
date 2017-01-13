///绘制圆弧
var EDrawArc = (function (_super) {
    __extends(EDrawArc, _super);
    function EDrawArc() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=EDrawArc,p=c.prototype;
    p.onAddToStage = function (e) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x1122cc);
        shp.graphics.drawCircle(200, 200, 2); //绘制圆心
        shp.graphics.drawArc(200, 200, 100, 0, Math.PI / 2, false); //绘制圆弧
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return EDrawArc;
}(egret.DisplayObjectContainer));
egret.registerClass(EDrawArc,'EDrawArc');
//# sourceMappingURL=EDrawArc.js.map