///绘制直线
var CLine = (function (_super) {
    __extends(CLine, _super);
    function CLine() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=CLine,p=c.prototype;
    p.onAddToStage = function (e) {
        var shp = new egret.Shape();
        shp.graphics.lineStyle(4, 0xff0000);
        shp.graphics.moveTo(0, 0);
        shp.graphics.lineTo(100, 100);
        shp.graphics.lineTo(232, 232);
        shp.graphics.lineTo(0, 33);
        shp.graphics.lineTo(122, 0);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    return CLine;
}(egret.DisplayObjectContainer));
egret.registerClass(CLine,'CLine');
//# sourceMappingURL=CLine.js.map